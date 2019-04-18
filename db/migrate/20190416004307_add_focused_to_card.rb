class AddFocusedToCard < ActiveRecord::Migration[5.2]
  def change
    add_column :cards, :focused, :boolean
  end
end
