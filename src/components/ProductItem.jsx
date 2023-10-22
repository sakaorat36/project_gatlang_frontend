export default function ProductItem() {
  //   const onClickProduct = () => {};

  return <div>ProductItem</div>;
}

/*
const onClickAdd = (e, menuId) => {
    const newOrderMenus = [...order.orderMenus]; // []
    
    // ถ้ากดปุ่ม + 
    if (e.target.value === "plus") { 
      const targetOrder = newOrderMenus.find((el) => +el.menuId === +menuId);
      // กดปุ่ม ADD ใต้ product
      // console.log(targetOrder) // {amounts : '1',menuId: 1,name : 'order name'}
      // console.log(newOrderMenus) // {amounts : '1',menuId: 1,name : 'order name'}
      if (targetOrder) {
        const clonedTarget = { ...targetOrder, amounts: +targetOrder.amounts + 1 };
        // console.log(clonedTarget) 
        // {amounts : '1',menuId: 1,name : 'order name'} กดปุ่มบวก 1 รอบ
        // {amounts : '2',menuId: 1,name : 'order name'} กดปุ่มบวก 2 รอบ
        // {amounts : '3',menuId: 1,name : 'order name'} กดปุ่มบวก 3 รอบ
        const filteredOrderMenus = newOrderMenus.filter(el => el.menuId !== menuId) // ไม่เท่ากับข้อมูลเก่า
        filteredOrderMenus.push(clonedTarget) 
        // console.log(filteredOrderMenus)
        setOrder(prev => ({...prev, orderMenus: filteredOrderMenus}))
      } else {
    
    // ยังไม่เคยแอด
        const targetProduct = products.find(el=> el.id === menuId)
        const newOrder = {amounts:"1",menuId : menuId,name: targetProduct.name, price: targetProduct.price}
        console.log(newOrder)
        newOrderMenus.push(newOrder)
        setOrder(prev => ({...prev, orderMenus: newOrderMenus}))
      }
    }
    // ถ้ากดปุ่ม - 
    else { 
      const targetOrder = newOrderMenus.find((el)=> +el.menuId === +menuId)
      // console.log(targetOrder) //  {amounts : '1',menuId: 1,name : 'order name'} ข้อมูลของที่มีอยู่แล้วหลังกด add
      if(targetOrder.amounts > 1) // ถ้ามี value
      {
        const clonedTarget = { ...targetOrder, amounts: +targetOrder.amounts - 1 };
        const filteredOrderMenus = newOrderMenus.filter(el => el.menuId !== menuId) // ไม่เท่ากับข้อมูลเก่า
        filteredOrderMenus.push(clonedTarget) 
        setOrder(prev => ({...prev, orderMenus: filteredOrderMenus}))
       
      }
      else {
       const removedOrderMenus= newOrderMenus.filter(el => el.menuId !== menuId)
       setOrder(prev => ({...prev, orderMenus: removedOrderMenus}))
      }
    }
    console.log(newOrderMenus);
  };
*/
