class Task < ActiveRecord::Base
  attr_accessible :completed, :content, :user_id, :complete
  acts_as_list
  USER_ID= {0=>"Hunter", 1=>"Andy", 2=>"Michael"}
end
