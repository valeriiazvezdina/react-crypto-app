import { Typography, Tag, Divider, Flex, Button } from 'antd';
import { TwitterOutlined, RedditOutlined } from '@ant-design/icons';
import CoinInfo from './CoinInfo';

export default function CoinInfoModal({ coin }) {
    return (
        <>
            <CoinInfo coin={coin} withSymbol={true} />

            <Divider />

            <Typography.Paragraph>
                <Typography.Text strong>1 hour: </Typography.Text>
                <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>{coin.priceChange1h}%</Tag>

                <Typography.Text strong>1 day: </Typography.Text>
                <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>{coin.priceChange1d}%</Tag>

                <Typography.Text strong>1 week: </Typography.Text>
                <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>{coin.priceChange1w}%</Tag>
            </Typography.Paragraph>

            <Typography.Paragraph>
                <Typography.Text strong>Price: </Typography.Text>
                {coin.price.toFixed(2)}$
            </Typography.Paragraph>

            <Typography.Paragraph>
                <Typography.Text strong>Price BTC: </Typography.Text>
                {coin.priceBtc}
            </Typography.Paragraph>

            <Typography.Paragraph>
                <Typography.Text strong>Market Cap: </Typography.Text>
                {coin.marketCap}$
            </Typography.Paragraph>

            {
                coin.contractAddress &&
                <Typography.Paragraph>
                    <Typography.Text strong>Contract Address: </Typography.Text>
                    {coin.contractAddress}
                </Typography.Paragraph>
            }

            <Typography.Paragraph>
                <Typography.Text strong>Website: </Typography.Text>
                <Typography.Link href={coin.websiteUrl} target='_blank'>{coin.websiteUrl}</Typography.Link>
            </Typography.Paragraph>

            <Flex align='center' justify='space-around'>

                <Button type='link' href={coin.twitterUrl} target='_blank'>
                    <TwitterOutlined style={{ fontSize: '30px' }} />
                </Button>

                <Button type='link' href={coin.redditUrl} target='_blank'>
                    <RedditOutlined style={{ fontSize: '30px' }} />
                </Button>
            </Flex>
        </>
    );
}