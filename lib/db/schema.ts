
import { pgTable, text, timestamp, uuid, varchar, boolean, integer } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  password: varchar('password', { length: 255 }).notNull(),
  role: varchar('role', { length: 20 }).notNull().default('student'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const clubs = pgTable('clubs', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  icon: varchar('icon', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow(),
});

export const events = pgTable('events', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description'),
  date: timestamp('date').notNull(),
  location: varchar('location', { length: 255 }),
  capacity: integer('capacity'),
  clubId: uuid('club_id').references(() => clubs.id),
  categoryId: uuid('category_id').references(() => categories.id),
  isPaid: boolean('is_paid').default(false),
  price: integer('price'),
  status: varchar('status', { length: 20 }).notNull().default('upcoming'),
  createdAt: timestamp('created_at').defaultNow(),
});

export const categories = pgTable('categories', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  color: varchar('color', { length: 7 }),
});

export const registrations = pgTable('registrations', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id),
  eventId: uuid('event_id').references(() => events.id),
  status: varchar('status', { length: 20 }).notNull().default('pending'),
  paymentStatus: varchar('payment_status', { length: 20 }),
  createdAt: timestamp('created_at').defaultNow(),
});

export const clubMemberships = pgTable('club_memberships', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id').references(() => users.id),
  clubId: uuid('club_id').references(() => clubs.id),
  role: varchar('role', { length: 20 }).notNull().default('member'),
  joinedAt: timestamp('joined_at').defaultNow(),
});
