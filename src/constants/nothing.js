// Col B  = agility
// col C = speedster t/f
// col D = brand bonus

=(    ROUNDDOWN(
        B2 *
        IF(
            C2,
            1.5 + D2 / 100,
            1 + D2 / 100
        ),
        0
    ) +
    ROUNDDOWN(
        B3 *
        IF(
            C3,
            1.5 + D3 / 100,
            1 + D3 / 100
        ),
        0
    ) +
    ROUNDDOWN(
        B4 *
        IF(
            C4,
            1.5 + D4 / 100,
            1 + D4 / 100
        ),
        0
    ) +
    ROUNDDOWN(
        B5 *
        IF(
            C5,
            1.5 + D5 / 100,
            1 + D5 / 100
        ),
        0
    ) ) * ( 100 /
    COUNT(
        B2:B5
    ) )
