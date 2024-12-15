# PyPi dependancies
from fastapi import APIRouter

# Python Library
from typing import Annotated

# Modules 

router = APIRouter(
    prefix='/rsa',
    tags=['rsa']
)

# @router.get("")
# async def 