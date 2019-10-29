class Api::MessagesController < ApplicationController
  def index
    # ここはグループモデルが送られてきたparamsの中からgroup_idというキーでDB上から探してきてくれる
    group = Group.find(params[:group_id])
    # 送られてきたparamsのidをto_iメソッドで番号に変換
    last_message_id = params[:id].to_i
    # グループのメッセージの中からlast_message_idより大きいidのものを@messagesに代入
    @messages =  group.messages.includes(:user).where("id > #{last_message_id}")
  end
end