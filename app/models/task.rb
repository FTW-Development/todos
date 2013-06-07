class Task < ActiveRecord::Base
  attr_accessible :completed, :content, :user_id, :complete
  acts_as_list
end
