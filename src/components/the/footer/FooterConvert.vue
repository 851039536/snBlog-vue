<template>
  <footer-modal :visible="ui.fToolsModal">
    <div>
      <div class="mb-1">
        <input v-model="name" type="text" class="w-150" placeholder="原始数据" />
      </div>
      <div>
        <input v-model="nameRet" type="text" class="w-150" placeholder="转换后数据" />
      </div>
      <div class="m-2">
        <button class="mr-1" @click="hexToDecimal(name)">16转10</button>
        <button class="mr-1" @click="decimalToHex(name)">10转16</button>
        <button class="mr-1" @click="decimalToAscii(name)">10转ascll</button>
        <button class="mr-1" @click="asciiToDecimal(name)">ascll转10</button>
        <button class="mr-1" @click="asciiToHex(name)">ascll转16</button>
        <button class="mr-1" @click="hexToAscii(name)">16转ascll</button>
      </div>
    </div>
  </footer-modal>
</template>

<script lang="ts" setup>
import { useUiSetStore } from '@store/modules/uiSettings'
const ui = useUiSetStore()
const name = ref()
const nameRet: any = ref()

/**
 * 10to16
 * @param decimal
 */
function decimalToHex(decimal: string) {
  //如果是字符串的话，可以先把字符串转换成 10 进制的数字
  const num = parseInt(decimal, 10)
  nameRet.value = num.toString(16)
}

/**
 * 16to10
 * @param hex
 */
function hexToDecimal(hex: string) {
  nameRet.value = parseInt(hex, 16)
}

/**
 * ascii转16
 * @param str
 */
function asciiToHex(str: string) {
  let hex = ''
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i).toString(16)
    hex += charCode.padStart(2, '0')
  }
  nameRet.value = hex
}

/**
 * 16toascii
 * @param hex
 */
function hexToAscii(hex: string) {
  let ascii = ''
  for (let i = 0; i < hex.length; i += 2) {
    let hexCode = hex.substr(i, 2)
    let charCode = parseInt(hexCode, 16)
    ascii += String.fromCharCode(charCode)
  }
  nameRet.value = ascii
}

// 将ASCII字符转换为十进制数值
function asciiToDecimal(character: string) {
  nameRet.value = ''
  for (const characterElement of character) {
    nameRet.value += characterElement.charCodeAt(0)
  }
}

function decimalToAscii(decimal: any) {
  nameRet.value = ''
  const decName = splitString(decimal)
  for (const ret of decName) {
    nameRet.value += String.fromCharCode(Number(ret))
  }
}

function splitString(str: string) {
  let arr = []
  for (let i = 0; i < str.length; i += 5) {
    arr.push(str.slice(i, i + 5))
  }
  return arr
}
</script>
