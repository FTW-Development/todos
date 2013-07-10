class Task < ActiveRecord::Base
  attr_accessible :completed, :content, :user_id, :complete, :position
  acts_as_list
  USER_ID= {0=>"Hunter", 1=>"Andy", 2=>"Michael"}
  validates :user_id, :numericality=> { message: "must be selected from the drop-down list"}
end
