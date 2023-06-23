import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  Index,
  BaseEntity,
  OneToMany,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { UrlCheck } from './url-check.entity';
import { Tag } from './tag.entity';

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn({ type: 'varchar', length: 50 })
  id: string;

  @BeforeInsert()
  setID(): void {
    this.id = `usr_${uuidv4()}`;
  }

  @Index('user_auth_id_idx')
  @Column()
  authId: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: false })
  isVerified: boolean;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @OneToMany(() => UrlCheck, (urlCheck) => urlCheck.user)
  urlChecks: UrlCheck[];

  @OneToMany(() => Tag, (tag) => tag.user)
  tags: Tag[];
}
