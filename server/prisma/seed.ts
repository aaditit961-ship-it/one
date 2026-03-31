import { PrismaClient } from '@prisma/client';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';
import dotenv from 'dotenv';

dotenv.config();

// Prisma 7 Adapter initialization
const adapter = new PrismaBetterSqlite3({ 
  url: process.env.DATABASE_URL || 'file:./prisma/dev.db' 
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Seeding TimeFlow Aether...');

  // Clean existing
  await prisma.event.deleteMany({});
  await prisma.task.deleteMany({});

  // Seed Events
  await prisma.event.create({
    data: {
      title: 'Neural Sync Session',
      description: 'Aligning cognitive buffers with Aether core',
      startTime: new Date(new Date().setHours(10, 0, 0, 0)),
      endTime: new Date(new Date().setHours(11, 30, 0, 0)),
      priority: 'High',
      category: 'Work',
      color: '#d0bcff'
    }
  });

  await prisma.event.create({
    data: {
      title: 'Temporal Maintenance',
      description: 'Routine check of flux capacitors',
      startTime: new Date(new Date().setHours(14, 0, 0, 0)),
      endTime: new Date(new Date().setHours(15, 0, 0, 0)),
      priority: 'Medium',
      category: 'System',
      color: '#bdf4ff'
    }
  });

  // Seed Tasks
  await prisma.task.create({
    data: {
      title: 'Synchronize Core Aether',
      priority: 'High',
      progress: 45,
    }
  });

  await prisma.task.create({
    data: {
      title: 'Patch Chronos Leak',
      priority: 'High',
      progress: 10,
    }
  });

  await prisma.task.create({
    data: {
      title: 'Recalibrate Flux Capacitor',
      priority: 'Medium',
      progress: 100,
      completed: true
    }
  });

  console.log('Seed manifestation complete.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
