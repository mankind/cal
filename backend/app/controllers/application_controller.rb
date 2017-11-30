class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :not_found_error

  private
   def not_found_error
    render json: {error: 'not found', status: 404}
  end

end
