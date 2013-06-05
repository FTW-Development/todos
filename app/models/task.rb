class Task < ActiveRecord::Base
  attr_accessible :completed, :content, :user_id,
  acts_as_list
end
