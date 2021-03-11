import {
    CardContentSC,
    CardRow,
    CardProperty,
    CardPropertyTitle,
    CardPropertyTestsCount,
    CardPropertyMultiRow,
    CardPropertyMultiRowContent,
} from "./styled";

const CardContent = () => {
    return (
        <CardContentSC>
            <CardRow>
                <CardProperty>Name:</CardProperty>
                <CardPropertyTitle>orca-demo-bucket-db</CardPropertyTitle>
            </CardRow>
            <CardRow>
                <CardProperty>Type:</CardProperty>
                <CardPropertyTitle>AWS S3 Bucket</CardPropertyTitle>
            </CardRow>
            <CardRow>
                <CardProperty>Tests:</CardProperty>
                <CardPropertyMultiRow>
                    <CardPropertyMultiRowContent>
                        <CardPropertyTitle>
                            ec2-14175-131-61.comrgreg
                        </CardPropertyTitle>
                        <CardPropertyTestsCount>
                            118 / 120
                        </CardPropertyTestsCount>
                    </CardPropertyMultiRowContent>

                    <CardPropertyMultiRowContent>
                        <CardPropertyTitle>
                            7fe00efc-8cfc-4454
                        </CardPropertyTitle>
                        <CardPropertyTestsCount>7 / 10</CardPropertyTestsCount>
                    </CardPropertyMultiRowContent>
                </CardPropertyMultiRow>
            </CardRow>
        </CardContentSC>
    );
};

export default CardContent;
