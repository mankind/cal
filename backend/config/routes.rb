Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :events, only: ['index', 'create']
    end
  end

  root to: "api/v1/events#index"

end
