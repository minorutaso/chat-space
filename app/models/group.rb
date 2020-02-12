class Group < ApplicationRecord
    has_many :group_users
    has_many :users,through: :group_users
    has_many :messages
    validates :name, presence: true, uniqueness: true
    
    # def show_group_name
    #     (@group.users.find do |user|)
    # end


    def show_last_message
    if (last_message = messages.last).present?
      if last_message.content?
        last_message.content
      else
        '画像があるよ'
      end
    else
      'メッセージがないよ'
    end
  end
end
