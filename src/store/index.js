import {create} from "zustand"

// const [skipPageReset, setSkipPageReset] = useState(false);

const useCounter = create((set, get) => ({

        excelData: [],
    
        setExcelData: (data) => set({ excelData: data }),
    
        removeExcelRow: (index) => {
    
            const temp = get().excelData
    
            temp.splice(index, 1)
    
            set({ excelData : [...temp] })
    
        },

   addTableRows : (index)=>{
           const temp = get().excelData
    
           temp.splice(0, 0, index)
    
           set({ excelData : [...temp] })

  }

  
    
    }))


// removeExcelRow: (index)=> set((state)=> {
//     let m = state.excelData
//     console.log(m.length)
//     console.log(m)
//     // let ddd = m.splice(index,1)
//     // console.log(m.length)
//     // console.log(ddd)
//     return {
//         ...state,
//         excelData: m
//     }
// }) 









export default useCounter