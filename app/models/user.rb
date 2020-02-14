class User < ApplicationRecord
 
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  def self.search(input, id)
    return nil if input == ""
    User.where(['name LIKE ?', "%#{input}%"] ).where.not(id: id).limit(10)
  end
      
  validates :name, presence: true
  has_many :group_users
  has_many :groups, through: :group_users
  has_many :messages
end
