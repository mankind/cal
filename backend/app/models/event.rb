class Event < ApplicationRecord
  validates :description, :start, :finish, presence: true

  validate :finish_date_is_after_start_date

  private

  def finish_date_is_after_start_date
    return if start.blank? || finish.blank?

    if finish < start
      errors.add(:finish, "cannot be before the start date") 
    end 
  end

end
