import React from 'react';

const FAQCard = (props) => (
  <div className="flex flex-col space-y-1 bg-gray-800 rounded p-4">
    {props.children}
  </div>
);
const FAQQuestion = (props) => (
  <h3 className="text-lg text-gray-100">{props.children}</h3>
);

const FAQAnswer = (props) => <p className="text-gray-400">{props.children}</p>;

const ExternalLink = (props) => (
  <a href={props.href} target="_blank" className="text-blue-400" noreferrer>
    {props.children}
  </a>
);

const tinyimpact = (
  <>
    tiny<span className="text-yellow-400 font-extrabold">impact</span>
  </>
);

const FAQContent = () => {
  return (
    <div className="py-8 px-4">
      <h2 className="text-3xl font-extrabold text-white">FAQs</h2>
      <div className="flex flex-col space-y-4 my-4">
        <FAQCard>
          <FAQQuestion>What is {tinyimpact}?</FAQQuestion>
          <FAQAnswer>
            {tinyimpact} is a simple project with a goal of using NFTs to help
            charities.
          </FAQAnswer>
        </FAQCard>
        <FAQCard>
          <FAQQuestion>Why does {tinyimpact} exist?</FAQQuestion>
          <FAQAnswer>
            {tinyimpact} exists to show that NFTs can be used for good. <br />
            <br />
            NFTs are the building blocks of the future of Internet. Their
            applications will be beyond our expectations. <br />
            <br />
            But at the moment, too many projects are trying to do the same thing
            without leveraging the potential of NFTs. <br />
            <br />
            This project is inspired by{' '}
            <ExternalLink href="https://vv.mirror.xyz/sb9NU7Wzpg-53wqNFPM-MCwWQ7y48RJlri3cr3Nt0Do">
              jackbutcher’s Care Package NFTs
            </ExternalLink>{' '}
            and{' '}
            <ExternalLink href="https://belugies.com/">Belugies</ExternalLink>.
          </FAQAnswer>
        </FAQCard>
        <FAQCard>
          <FAQQuestion>
            What do you get by minting a {tinyimpact} NFT?
          </FAQQuestion>
          <FAQAnswer>
            <ul className="list-decimal ml-4">
              <li>An unique NFT that is yours to own</li>
              <li>Satisfaction of having donated to charity</li>
              <li>
                If you sell the NFT on a marketplace (MagicEden, etc), you will
                get 25% of the sale price while the rest goes to the same
                charity.
              </li>
            </ul>
          </FAQAnswer>
        </FAQCard>
        <FAQCard>
          <FAQQuestion>Are there any benefits of holding the NFT?</FAQQuestion>
          <FAQAnswer>
            <ul className="list-disc ml-4">
              <li>Member of DAO</li>
              <li>
                Voting power to choose future designers to collaborate with
              </li>
              <li>Voting power to choose future charities to donate to</li>
            </ul>
          </FAQAnswer>
        </FAQCard>
        <FAQCard>
          <FAQQuestion>What is the future plan?</FAQQuestion>
          <FAQAnswer>
            Once the <i>Impact1</i> collection sells out and $25,000 is raised
            for charity, I expect to make this an annual thing. <br />
            <br />
            Each year, I will work with a designer to generate unique art that
            you can purchase and 100% of the proceeds will go to a charity
            decided by DAO members. <br />
            <br />
            Before <i>Impact2</i> collection, a formal DAO will be setup.
          </FAQAnswer>
        </FAQCard>
        <FAQCard>
          <FAQQuestion>
            Details about <i>Impact1</i> Collection
          </FAQQuestion>
          <FAQAnswer>
            Goal - raise more than $25000 for{' '}
            <ExternalLink href="https://www.givewell.org/maximum-impact-fund">
              GiveWell's Maximum Impact Fund
            </ExternalLink>
            <br />
            <br />
            Mint Date - <b>Feb 18, 2022</b>
            <br /> Total NFTs - <b>1111</b>
            <br />
            Mint Price - <b>$25 </b>(~0.25 SOL now based on current prices)
            <br />
          </FAQAnswer>
        </FAQCard>
        <FAQCard>
          <FAQQuestion>Why GiveWell's Maximum Impact Fund?</FAQQuestion>
          <FAQAnswer>
            <a href="https://www.givewell.org/about">GiveWell</a> is a
            non-profit that does extensive research to determine which charities
            have the most impact. They publish extensive reports on their
            website. <br />
            <br />
            By donating to their Maximum Impact Fund, we can trust that our
            money will have the maximum impact in affecting other lives.
          </FAQAnswer>
        </FAQCard>
        <FAQCard>
          <FAQQuestion>Who is building {tinyimpact}?</FAQQuestion>
          <FAQAnswer>
            Monish Kumar (
            <ExternalLink href="https://twitter.com/monishkumar_">
              @monishkumar_
            </ExternalLink>
            ), a product designer from web2 who recognizes that crypto and web3
            are here to stay.
          </FAQAnswer>
        </FAQCard>
        <FAQCard>
          <FAQQuestion>How can we trust this?</FAQQuestion>
          <FAQAnswer>
            For any NFT project, you should always DYOR (do your own research).
            It helps to know the people behind the project.
            <br />
            <br />
            Once the smart contract is ready, I will post its link here. You can
            verify that the recipient's wallet is the same as{' '}
            <ExternalLink href="https://www.givewell.org/about/donate/cryptocurrency?FormStack_Form_Submission__c.referrer_header=https://www.givewell.org/">
              GiveWell's Solana wallet address given here.
            </ExternalLink>
          </FAQAnswer>
        </FAQCard>

        <FAQCard>
          <FAQQuestion>Are NFTs a scam?</FAQQuestion>
          <FAQAnswer>
            Most of them are not. Some of them are. I have been burned myself a
            few times trusting the wrong projects. But more often, I have seen
            tremendous amount of energy and time people put behind their
            projects. <br />
            <br />
            Why do NFTs get a bad name in the press? It is normal for people to
            make fun of things I don't understand. A year back, I honestly did
            not understand people spending hundreds of thousands in buying NFTs.
            Now, I do. <br />
          </FAQAnswer>
        </FAQCard>
        <FAQCard>
          <FAQQuestion>Do NFTs consume a lot of power?</FAQQuestion>
          <FAQAnswer>
            NFTs on the Solana Blockchain do not. A transaction on Solana
            consumes less than energy than two Google searches -{' '}
            <a href="https://www.yahoo.com/now/one-solana-transaction-uses-little-114956337.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAHyTymXSzTISz6jtCPTNj_qKnLJuVZGVqCfR_aH6zD4QRaZ0kP-sJvZpGg35GIrqcOxDBD9QJAcfJJ5yaIlP0YWvdTUStY9YVi3YUWflCCBidOTY7Q38_DXUagXA22joPsz_72DBk6S-tT_zjr2pNFNfYA1qZMZKR7p7GwAvhTS1#:~:text=The%20entire%20Solana%20network%2C%20contains,of%20just%20986%20American%20households.">
              Yahoo.
            </a>{' '}
            <br />
            <br />
            While Ethereum (another blockchain) right now consumes more energy
            and money for transactions, it will soon move to a different model
            making it more energy efficient and affordable.
          </FAQAnswer>
        </FAQCard>
      </div>
    </div>
  );
};

export default FAQContent;
