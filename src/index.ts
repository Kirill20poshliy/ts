// Task #1
interface ITotalPriceArgs {
  price: number,
  discount: number,
  isInstallment: boolean,
  months: number
}

const totalPrice = ({ price, discount, isInstallment, months }: ITotalPriceArgs): number => {
  const discountedPrice = price * (1 - discount / 100);
  return isInstallment ? discountedPrice / months : discountedPrice;
};

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250

// Task #2

const posts = [
  {
    id: '62e69d5a5458aac0ed320b35',
    title: 'id labore ex et quam laborum',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eostempora quo necessitatibusdolor quam autem quasireiciendis et nam sapiente accusantium'
  },
  {
    id: '62e69d5a5458aac0ed320b1c',
    title: 'quo vero reiciendis velit similique earum',
    body: 'est natus enim nihil est dolore omnis voluptatem numquamet omnis occaecati quod ullam at voluptatem error expedita pariaturnihil sint nostrum voluptatem reiciendis et'
  },
  {
    id: '62e69d5a5458aac0ed320b32',
    title: 'odio adipisci rerum aut animi',
    body: 'quia molestiae reprehenderit quasi aspernaturaut expedita occaecati aliquam eveniet laudantiumomnis quibusdam delectus saepe quia accusamus maiores nam estcum et ducimus et vero voluptates excepturi deleniti ratione'
  },
  {
    id: '62e69d5a5458aac0ed320b39',
    title: 'alias odio sit',
    body: 'non et atqueoccaecati deserunt quas accusantium unde odit nobis qui voluptatemquia voluptas consequuntur itaque doloret qui rerum deleniti ut occaecati'
  },
  {
    id: '62e69d5a5458aac0ed320b53',
    title: 'vero eaque aliquid doloribus et culpa',
    body: 'harum non quasi et rationetempore iure ex voluptates in rationeharum architecto fugit inventore cupiditatevoluptates magni quo et'
  },
  {
    id: '62e69d5a5458aac0ed320b19',
    title: 'et fugit eligendi deleniti quidem qui sint nihil autem',
    body: 'doloribus at sed quis culpa deserunt consectetur qui praesentiumaccusamus fugiat dictavoluptatem rerum ut voluptate autemvoluptatem repellendus aspernatur dolorem in'
  },
  {
    id: '62e69d5a5458aac0ed320b25',
    title: 'repellat consequatur praesentium vel minus molestias voluptatum',
    body: 'maiores sed dolores similique labore et inventore etquasi temporibus esse sunt id eteos voluptatem aliquamratione corporis molestiae mollitia quia et magnam dolor'
  }
];

interface IPost {
  id: string;
  title: string;
  body: string;
}

interface INormalizedData {
  byId: Record<string, IPost>;
  allIds: string[];
}

const normalizeData = (unnormalizedData: IPost[]): INormalizedData => {
  const byId: Record<string, IPost> = {};
  const allIds: string[] = [];

  unnormalizedData.forEach(post => {
    byId[post.id] = post;
    allIds.push(post.id);
  });

  return { byId, allIds };
};

const normalizedPosts = normalizeData(posts);
console.log(normalizedPosts);

// Task #3

interface IComment {
  id: number;
  postId: number;
  email: string;
  name: string;
  body: string;
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = async (url: string): Promise<IComment[]> => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json() as IComment[];
};

getData(COMMENTS_URL)
  .then(data => {
    data.forEach(comment => {
      console.log(`ID: ${comment.id}, Email: ${comment.email}`);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });