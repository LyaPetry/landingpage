import { GoogleSpreadsheet } from 'google-spreadsheet'
import dayjs from 'dayjs'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const fromBase64 = value => {
  const buff = new Buffer.from(value, 'base64')
  return buff.toString('ascii')
}

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })


    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A3:C3')

    const showMessagecell = sheetConfig.getCell(2, 0)

    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      'Data de Captura': dayjs().format('DD/MM/YYYY HH:mm')
    })
    res.end(req.body)
  } catch (error) {
    console.error(error)
    res.end('error')
  }
}