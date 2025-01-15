import { generatePageNums } from '@utils/generatePageNums'

describe('generatePageNums', () => {
  it('should return a single page if total_pages is 1', () => {
    const result = generatePageNums(1, 1)
    expect(result).toEqual([1])
  })

  it('should return all pages when total_pages is less than maxPagesToShow', () => {
    const result = generatePageNums(1, 3, 5)
    expect(result).toEqual([1, 2, 3])
  })

  it('should return pages centered around the current_page', () => {
    const result = generatePageNums(3, 10, 5)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should handle current_page near the beginning', () => {
    const result = generatePageNums(1, 10, 5)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it('should handle current_page near the end', () => {
    const result = generatePageNums(10, 10, 5)
    expect(result).toEqual([6, 7, 8, 9, 10])
  })

  it('should not exceed total_pages', () => {
    const result = generatePageNums(8, 10, 5)
    expect(result).toEqual([6, 7, 8, 9, 10])
  })

  it('should handle large maxPagesToShow gracefully', () => {
    const result = generatePageNums(5, 10, 20)
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })

  it('should work correctly when maxPagesToShow is 1', () => {
    const result = generatePageNums(5, 10, 1)
    expect(result).toEqual([5])
  })

  it('should handle edge case where current_page > total_pages', () => {
    const result = generatePageNums(15, 10, 5)
    expect(result).toEqual([6, 7, 8, 9, 10])
  })

  it('should handle edge case where current_page < 1', () => {
    const result = generatePageNums(0, 10, 5)
    expect(result).toEqual([1, 2, 3, 4, 5])
  })
})
