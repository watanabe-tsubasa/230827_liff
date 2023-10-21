// const lineId = 2;
// const user_action = 'うんち';
// const description = '下痢';
// const baseUrl = 'https://ph-linebot-77e13c401332.herokuapp.com/record/create';

export const postLineRecord = async (lineId, user_action, description='', baseUrl='https://ph-linebot-77e13c401332.herokuapp.com/record/create') => {
  const params = {
    line_id: lineId,
    user_action: user_action,
    description: description,
  };
  const queryParams = new URLSearchParams(params).toString();
  const url = `${baseUrl}?${queryParams}`;
  const res = await fetch(url, {
    method: 'POST',
    mode: "no-cors"
  });
  // const text = await res.text();
  // console.log(text);
  // return text;
}


// postLineRecord(lineId, user_action);