##  grouosテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null:  false,unique: true|

### Association
-has_many :users, through: :groups_users
-has_many :groups_users
-has_many :messages

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index:  true|
|password|string|null: false,  unique: true|
|e-mail|string|null: false, unique: true|

### Association
- has_many  :groups,  through:  :groups_users
- has_many  :groups_users
- has_many  :messages


## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|referencesr|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

##  messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|string|
|user_id|references|null: false,  foreign:  true|
|group_id|references|null:  false,  foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
