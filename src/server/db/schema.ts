// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  timestamp,
  varchar,
  real,
  text,
  uniqueIndex,
} from "drizzle-orm/pg-core";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `pst3_${name}`);

export const Property = createTable(
  "ad",
  {
    id: integer("id").primaryKey().generatedByDefaultAsIdentity({
      name: "pst3_ad_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 2147483647,
      cache: 1,
    }),
    title: varchar("title", { length: 256 }),
    price: real("price"),
    address: text("address"),
    bedrooms: integer("bedrooms"),
    bathrooms: integer("bathrooms"),
    houseSize: real("house_size"),
    landSize: real("land_size"),
    timestamp: timestamp("timestamp", { mode: "string" }),
    area: varchar("area", { length: 256 }),
    city: varchar("city", { length: 256 }),
    contactCard: varchar("contactCard", { length: 512 }),
    phoneNumbers: varchar("phoneNumbers", { length: 512 }),
    url: varchar("url", { length: 512 }),
    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" }),
    reference: varchar("reference", { length: 256 }).notNull(),
    slug: text("slug"),
    description: text("description"),
    account: varchar("account", { length: 256 }),
    images: text("images"),
  },
  (table) => {
    return {
      accountIdx: index("account_idx").using(
        "btree",
        table.account.asc().nullsLast(),
      ),
      phoneNumbersIdx: index("phone_numbers_idx").using(
        "btree",
        table.phoneNumbers.asc().nullsLast(),
      ),
      referenceIdx: uniqueIndex("reference_idx").using(
        "btree",
        table.reference.asc().nullsLast(),
      ),
      slugIdx: index("slug_idx").using("btree", table.slug.asc().nullsLast()),
      titleIdx: index("title_idx").using(
        "btree",
        table.title.asc().nullsLast(),
      ),
    };
  },
);

export type NewProperty = typeof Property.$inferInsert;
export type SelectProperty = typeof Property.$inferSelect;
