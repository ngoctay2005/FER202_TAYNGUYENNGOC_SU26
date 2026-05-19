function People() {
    
// tạo 1 list of objects people gồm 10 người 3 phần tử : id, name, age.
    //Hiển thị danh sach người dùng trong component People ra dạng danh sách.
    //có đánh số thứ tự, tên và tuổi người dùng.
    //Tìm người đầu tiên có tuổi là teenager, nếu có thì in ra thông tin, không có thì in No result.
    
    const people = [
        { id: 1, name: 'Alice', age: 30 },
        { id: 2, name: 'Bob', age: 25 },
        { id: 3, name: 'Charlie', age: 35 },
        { id: 4, name: 'David', age: 40 },
        { id: 5, name: 'Eve', age: 32 },
        { id: 6, name: 'Frank', age: 28 },
        { id: 7, name: 'Grace', age: 38 },
        { id: 8, name: 'Henry', age: 45 },
        { id: 9, name: 'Ivy', age: 29 },
        { id: 10, name: 'Jack', age: 33 }
    ];
    const teenager = people.find(person => person.age >= 13 && person.age <= 19);
    return (
        <div>
            <h1>People</h1>
            {teenager ? (
                <p>{teenager.name} is a teenager.</p>
            ) : (
                <p>No result.</p>
            )}
            <ul>
                {people.map((person, index) => (
                    <li key={person.id}>
                        {index + 1}. {person.name} - {person.age} years old
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default People;