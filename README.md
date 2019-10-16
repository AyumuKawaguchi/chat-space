## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|varchar(255)|null: false|
|password|char(32)|null: false,  unique: true|
|e-mail|varchar(255)|null: false, unique: true|

### Association
- has_many  :groups,  through:  :users
- has_many  :messages

##  grouosテーブル

|Column|Type|Options|
|------|----|-------|
|group_name|varchar(255)|null:  false,unique: true|

### Association
-has_many :users, through: :groups
-has_many :messages

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

##  messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|user_id|interger|null: false,  foreign:  true|
|group_id|interger|null:  false,  foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
