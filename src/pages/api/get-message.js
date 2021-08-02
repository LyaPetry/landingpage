import { GoogleSpreadsheet } from 'google-spreadsheet'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)


export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: process.env.SHEET_PRIVATE_KEY
    })
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A3:C3')

    const showMessagecell = sheet.getCell(2, 0)

    const textTitleCell = sheet.getCell(2, 1)

    const textMessageCell = sheet.getCell(2, 2)

    res.end(JSON.stringify({
      showMessage: showMessagecell.value === 'VERDADEIRO',
      title: textTitleCell.value,
      content: textMessageCell.value
    }))


  } catch (error) {
    res.end(JSON.stringify({
      showMessage: false,
      title: '',
      content: ''
    }))
  }





}