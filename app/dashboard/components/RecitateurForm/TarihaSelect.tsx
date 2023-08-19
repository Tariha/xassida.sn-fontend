import { TARIHA } from "@/lib/constants"
import { FormControl } from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const TarihaSelect = ({ field }: { field: any }) => {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <FormControl>
        <SelectTrigger>
          <SelectValue placeholder="La confrérie" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {TARIHA.map((tariha) => (
          <SelectItem
            key={tariha.id}
            className="cursor-pointer"
            value={tariha.id}
          >
            {tariha.value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default TarihaSelect
