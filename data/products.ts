export interface Product {
    id: string;
    name: string;
    slug: string;
    price: number;
    image: string;
    availableQuantity: number;
    description: string;
    notes: string;
    usage: string;
}

export const PRODUCTS: Product[] = [
    {
        id: "1",
        name: "Funfair Evening",
        slug: "funfair-evening",
        price: 135,
        image: "/collection/Funfair Evening-1500x1500.avif",
        availableQuantity: 10,
        description: "The sound of laughter and music fills the air. The scent of candy apples and caramel popcorn floats on the breeze. A magical night at the funfair, captured in a bottle.",
        notes: "Petitgrain, Sweet Apple, Orange Blossom, Caramel, Ambroxan",
        usage: "Spray generously on pulse points (wrists, neck, behind ears) and let the fragrance settle."
    },
    {
        id: "2",
        name: "Lazy Sunday Morning",
        slug: "lazy-sunday-morning",
        price: 120,
        image: "/collection/Lazy sunday.avif",
        availableQuantity: 15,
        description: "The memory of soft skin and fresh linen sheets. A floral, woody musk fragrance that captures the feeling of a slow, peaceful Sunday morning.",
        notes: "Aldehydes, Pear Accord, Lily of the Valley, Iris, White Musk",
        usage: "Perfect for everyday wear. Apply to clean skin for a fresh, comforting scent."
    },
    {
        id: "3",
        name: "By The Fireplace",
        slug: "by-the-fireplace",
        price: 145,
        image: "/collection/bythefireplace.avif",
        availableQuantity: 8,
        description: "The crackling of a wood fire on a winter evening. Warm, smoky, and sweet, this fragrance evokes the comfort of being indoors while snow falls outside.",
        notes: "Pink Pepper, Orange Flower Petals, Clove Oil, Chestnut Accord, Gaïac Wood Oil, Vanilla Accord",
        usage: "Ideal for cooler weather or evening wear. A cozy and inviting scent."
    },
    {
        id: "4",
        name: "Jazz Club",
        slug: "jazz-club",
        price: 140,
        image: "/collection/jazzclub.avif",
        availableQuantity: 12,
        description: "The atmosphere of a private club. Heady cocktails and cigar smoke. A woody, spicy fragrance that is both elegant and intoxicating.",
        notes: "Pink Pepper, Primofiore Lemon, Rum Absolute, Clary Sage Oil, Java Vetiver Oil, Tobacco Leaf Absolute",
        usage: "A sophisticated choice for night outs. Leaves a lasting impression."
    },
    {
        id: "5",
        name: "Sailing Day",
        slug: "sailing-day",
        price: 125,
        image: "/collection/sailing day.avif",
        availableQuantity: 20,
        description: "A dive into the deep blue ocean. Fresh, aquatic, and invigorating, this fragrance captures the sensation of sailing on a clear summer day.",
        notes: "Aquatic Accord, Aldehydes, Juniper Essence, Coriander, Red Seaweed Essence, Ambergris",
        usage: "Refreshing and uplifting. Great for summer days or whenever you need a burst of energy."
    },
    {
        id: "6",
        name: "Springtime in a Park",
        slug: "springtime-in-a-park",
        price: 130,
        image: "/collection/springtime in a park.avif",
        availableQuantity: 5,
        description: "Blossoming flowers and the first rays of spring sunshine. A delicate, floral fragrance that celebrates the beauty of nature awakening.",
        notes: "Pear Accord, Bergamot Essence, Lily of the Valley Accord, Jasmine Grandiflorum Absolute, Rose Damascena Absolute, Musks",
        usage: "A light and romantic scent. Perfect for spring and summer."
    },
];
