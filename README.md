# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- belongs_to :email
- belongs_to :password
- belongs_to :username

## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|group|text|null: false|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user_id
- belongs_to :group

### user_groupsテーブル
|Culum|Type|Options|
|-----|----|-------|
|user_id|integer|null: false|
|group_id|integer|null: false|
### Association
- belongs_to :user_id
- belongs_to : group_id

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|image|string|null: false|
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
### Association
- belongs_to : group_id
- belongs_to : user_id
- has_many : body
- has_many : image

