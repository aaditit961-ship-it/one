import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Prisma 7 Adapter expects a config object with a 'url' property
const adapter = new PrismaBetterSqlite3({ 
  url: process.env.DATABASE_URL || 'file:./prisma/dev.db' 
});

const prisma = new PrismaClient({ adapter });

const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// --- Health Check ---
app.get('/api/health', (req, res) => {
  res.json({ status: 'Aether System Active', timestamp: new Date() });
});

// --- Events API ---
app.get('/api/events', async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      orderBy: { startTime: 'asc' },
    });
    res.json(events);
  } catch (error) {
    console.error('Temporal retrieval error:', error);
    res.status(500).json({ error: 'Failed to fetch temporal data' });
  }
});

app.post('/api/events', async (req, res) => {
  const { title, description, startTime, endTime, priority, category, color } = req.body;
  try {
    const event = await prisma.event.create({
      data: {
        title,
        description,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        priority: priority || 'Medium',
        category,
        color,
      },
    });
    res.status(201).json(event);
  } catch (error) {
    console.error('Manifestation error:', error);
    res.status(400).json({ error: 'Manifestation failed – check temporal parameters' });
  }
});

app.delete('/api/events/:id', async (req, res) => {
  try {
    await prisma.event.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: 'Node not found' });
  }
});

// --- Tasks API ---
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await prisma.task.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(tasks);
  } catch (error) {
    console.error('Active node retrieval error:', error);
    res.status(500).json({ error: 'Failed to retrieve active nodes' });
  }
});

app.post('/api/tasks', async (req, res) => {
  const { title, description, priority, progress, dueDate } = req.body;
  try {
    const task = await prisma.task.create({
      data: {
        title,
        description,
        priority: priority || 'Medium',
        progress: progress || 0,
        dueDate: dueDate ? new Date(dueDate) : null,
        completed: false,
      },
    });
    res.status(201).json(task);
  } catch (error) {
    console.error('Node creation error:', error);
    res.status(400).json({ error: 'Node manifestation failed' });
  }
});

app.patch('/api/tasks/:id', async (req, res) => {
  const { title, description, priority, progress, completed, dueDate } = req.body;
  try {
    const task = await prisma.task.update({
      where: { id: req.params.id },
      data: {
        title,
        description,
        priority,
        progress,
        completed,
        dueDate: dueDate ? new Date(dueDate) : undefined,
      },
    });
    res.json(task);
  } catch (error) {
    console.error('Recalibration error:', error);
    res.status(404).json({ error: 'Failed to recalibrate node' });
  }
});

app.delete('/api/tasks/:id', async (req, res) => {
  try {
    await prisma.task.delete({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: 'Node archival failed' });
  }
});

app.listen(PORT, () => {
  console.log(`TimeFlow Backend initialized on port ${PORT}`);
});
