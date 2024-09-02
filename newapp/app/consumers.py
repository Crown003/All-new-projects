from channels.consumer import AsyncConsumer
from channels.exceptions import StopConsumer
from time import sleep
import asyncio


class MyAsyncConsumer(AsyncConsumer):
    async def websocket_connect(self, event):
        print("Websocket connected...", event)
        await self.send(
            {
                "type": "websocket.accept",
            }
        )

    async def websocket_receive(self, event):
        print("Messgae recived...")
        for i in range(10):
            await self.send(
                {
                    "type": "websocket.send",
                    "text": str(i),
                }
            )
            await asyncio.sleep(1)

    async def websocket_disconnect(self, event):
        print("Websocket disconnected...")
        raise StopConsumer()
