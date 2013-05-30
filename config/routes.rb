Todos::Application.routes.draw do
  root :to => 'tasks#index'
  resources :tasks
end
