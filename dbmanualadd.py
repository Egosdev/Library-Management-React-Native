import sqlite3

conn = sqlite3.connect('myDB.db')

try:
    with open('assets/book.jpg', 'rb') as file:
        image_blob = file.read()

    conn.execute("INSERT INTO books (title, isbn, genre, description, cover) VALUES (?, ?, ?, ?, ?)",
                 ('Hayvanlardan Tanrılara - Sapiens', '978-0099590088', 'Non-fiction', 'Harari; kitabının başında dünyanın gelişiminin önce fizik, ardından kimya ve en sonunda biyoloji etrafında teşekkül ettiğini söyleyerek sözlerine başlıyor. Bu noktadan itibaren evrime de temas eden Harari, neandertal ve sapiens türlerinin günümüze uzanan köklerini ele alıyor. Kitapta insanın gelişimi; “Bilişsel Devrim”, “Tarım Devrimi” ve “Bilimsel Devrim” olmak üzere üç temel başlık altında inceleniyor.', image_blob))
    conn.commit()
    print("Veri başarıyla eklendi.")
except Exception as e:
    conn.rollback()
    print("Veri eklenirken hata oluştu:", e)
finally:
    conn.close()
