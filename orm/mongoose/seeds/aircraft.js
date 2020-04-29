// Global Constants
const collectionSeed = [
    {
        make: 'Airbus',
        model: 'Airbus A320neo',
        year: 2010,
        tail_number: 'OMOOAFM1281',
        note: 'Sed voluptatum eos. Aliquam velit cumque voluptas tenetur ducimus rerum. Aut facere reprehenderit labore. Sit voluptas assumenda ut. Libero est deleniti qui nostrum rem et ut repellat.'
    },
    {
        make: 'Antonov',
        model: 'Antonov AN-124 Ruslan',
        year: 1956,
        tail_number: 'ZSQOCWV1',
        note: 'Aspernatur consequatur dolorem sit delectus voluptatum at et. Illo at qui animi excepturi architecto impedit. Repudiandae expedita quam enim ipsum modi nemo. Soluta et ad eum non sunt quia placeat. Incidunt fugiat nulla dicta et minus tempora harum tempora.'
    },
    {
        make: 'Airbus',
        model: 'Airbus A350-1000',
        year: 1985,
        tail_number: 'WHAACDD1PUR',
        note: 'Rerum dolor officia cumque. Dolor odio est qui est. Quo et temporibus voluptatem itaque dolores ullam autem officia. Placeat neque qui voluptatem in eos quidem.'
    },
    {
        make: 'Airbus',
        model: 'Airbus A330-900neo',
        year: 1954,
        tail_number: 'AODOAUU1',
        note: 'Rerum doloremque cupiditate. Quia enim voluptate deserunt nesciunt tempora pariatur voluptatem repellat. Amet vero temporibus quia amet. Ad in ex et et dolores consequuntur minus.'
    },
    {
        make: 'Bell',
        model: 'Bell 212',
        year: 2011,
        tail_number: 'MQIOMSP1',
        note: 'Quaerat ipsam perferendis dignissimos quo molestiae. Sed qui sequi quo facere provident ut rem ut culpa. Aut ab velit qui. Aliquid dignissimos voluptatem.'
    },
    {
        make: 'Airbus',
        model: 'Airbus A330-300',
        year: 2008,
        tail_number: 'AQUAMLS1',
        note: 'Culpa neque eum. Ut minima eligendi veritatis error explicabo excepturi. Ut nesciunt incidunt tempora aut et animi eos non dolorem. Eius quaerat quia voluptas earum reprehenderit dolorum possimus adipisci et.'
    },
    {
        make: 'Aerospatiale',
        model: 'Aerospatiale/Alenia ATR 72',
        year: 1955,
        tail_number: 'DGHICFC1UOG',
        note: 'Iste reiciendis quaerat non. Quam minus dolorem id molestiae non veniam praesentium et. Quam molestias occaecati tempore consequatur ratione minima.'
    },
    {
        make: 'Aeroprakt',
        model: '8KCAB Decathlon, 8GCBC Scout',
        year: 2005,
        tail_number: 'GEOEMVA1200',
        note: 'Et et est fugiat veritatis. Corporis eveniet aliquam. Aspernatur accusantium voluptatibus repudiandae nam. Aut autem illum cumque. Libero qui accusantium recusandae repellendus quia et qui pariatur.'
    },
    {
        make: 'Airbus',
        model: 'Airbus A310-200',
        year: 1985,
        tail_number: 'TSTABSO1553',
        note: 'Soluta dolores nisi unde officiis et quod ratione et. Qui veniam voluptate doloribus architecto ipsum voluptate expedita. Et consequatur qui in quod. Qui culpa aspernatur animi voluptatem nulla. Eos earum quae et fugit voluptas nesciunt. Assumenda accusamus dolorem consequatur omnis dolores laboriosam id commodi.'
    },
    {
        make: 'Boeing',
        model: 'Boeing 737-600',
        year: 1968,
        tail_number: 'OWTEMGP1',
        note: 'Velit unde sed dolores voluptas. Reiciendis ipsa explicabo occaecati vel dolor culpa aperiam. Voluptas facilis quo eaque. Nesciunt occaecati ex eum rerum sapiente qui.'
    },
    {
        make: 'Boeing',
        model: 'Boeing 737-400',
        year: 1962,
        tail_number: 'CNHUMRD1552',
        note: 'Neque quibusdam similique error et explicabo. Eos quod veritatis non consectetur aut eveniet non impedit. Sit adipisci facere incidunt dolore fugit. Voluptates recusandae sed dolorem repudiandae rem dolor molestiae.'
    },
    {
        make: 'British Aerospace',
        model: 'BAe 146-300',
        year: 2003,
        tail_number: 'KFNEAQA1651',
        note: 'Consequatur facere pariatur qui et illum. Omnis quibusdam eaque distinctio consequatur. Hic eveniet non maiores recusandae ratione ullam quia consequuntur. Consectetur laborum non autem iste. Doloribus unde nihil officia molestiae.'
    },
    {
        make: 'Avro International Aerospace',
        model: 'Avro RJ70',
        year: 2000,
        tail_number: 'DDVILAR1119',
        note: 'Dolor distinctio veritatis provident quae illum. Exercitationem itaque ut velit omnis. Sed consequatur dolorem itaque ea id eveniet error.'
    },
    {
        make: 'Airbus',
        model: 'Airbus A330-700 "Beluga XL"',
        year: 2019,
        tail_number: 'TDIOINE1',
        note: 'Delectus aspernatur corrupti et est recusandae. Quibusdam nobis qui ad ut. Ullam aliquid facere aut repellat et iste optio sunt vero. Qui asperiores ut quisquam ut et et. Voluptatum ut doloremque cumque eos.'
    },
    {
        make: 'Aerospatiale',
        model: 'Aerospatiale/Alenia ATR 42-500',
        year: 1993,
        tail_number: 'QLOOEEQ1',
        note: 'Sit ex consequatur. Doloribus cum sunt. Similique laudantium vitae hic qui. Ut optio inventore. Temporibus ut sequi eum.'
    },
    {
        make: 'Aquila',
        model: 'Aquila A 210',
        year: 2013,
        tail_number: 'SMGUBRW1',
        note: 'Labore illo perspiciatis labore vel at vel distinctio dicta inventore. Voluptatem corporis non delectus provident aut. Quam laboriosam ex rerum facere eligendi non quod qui ea. Iste itaque vero explicabo quo laborum natus reprehenderit. Iste fuga ea illo quaerat culpa aut rerum.'
    },
    {
        make: 'Antonov',
        model: 'Antonov AN-32',
        year: 1958,
        tail_number: 'SNHOBBJ1',
        note: 'Ab nisi modi in. Beatae reprehenderit reiciendis ut et. Ut accusantium vero qui a eius a est. Ipsa ipsa dolores. At libero assumenda distinctio aliquam molestiae voluptatem vel id architecto. Id dolor iusto ipsa nulla eos voluptate.'
    },
    {
        make: 'Aerospatiale',
        model: 'Aerospatiale (Sud Aviation) Se.210 Caravelle',
        year: 1994,
        tail_number: 'XPKALAN1',
        note: 'Dolorum non voluptatibus voluptatem quidem. A nisi quia. Tempora ipsa quam. Magni blanditiis sunt. Voluptatem doloremque dolorem repellat sint.'
    },
    {
        make: 'Airbus',
        model: 'Airbus A318 (sharklets)',
        year: 1997,
        tail_number: 'CEUOEGK1',
        note: 'Delectus dolorem eos quia. Consequatur est vel voluptas. Iusto adipisci accusantium.'
    },
    {
        make: 'Airbus',
        model: 'Airbus A220-300',
        year: 1969,
        tail_number: 'CGPIBYH1QEA',
        note: 'Temporibus aut non voluptas cupiditate ab repudiandae delectus ut. Et nesciunt id provident ut qui totam ut provident. Officia accusamus labore. Tempore quo ducimus voluptatem provident debitis dicta. Nemo enim facilis repellat. Enim vel ad odio.'
    }
]

// Load seed data
module.exports = collectionSeed;