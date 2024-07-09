import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Karen Langley",
      title: "AI Frenzy Propels Stocks to Monster First Half",
      description:
        "The S 500 has climbed 14% despite reduced hopes for Federal Reserve interest-rate cuts.",
      url: "https://www.wsj.com/finance/stocks/ai-frenzy-propels-stocks-to-monster-first-half-620229cc",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/uQj_tfsxYeVujWogI77RpQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/the_wall_street_journal_hosted_996/b32f55e6c0d0676cb5213d644f4fb6ef",
      publishedAt: "2024-06-28T20:56:00Z",
      content:
        "Nvidias ascent is a big reason the S&amp;P 500 has climbed this year. - Justin Sullivan/Getty Images\r\nThe AI fervor powering the stock market shows no sign of cooling down.\r\nMuch as in 2023, investor… [+6422 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Ben Glickman",
      title: "Carmakers File Challenge to Parts of New Automatic-Braking Rule",
      description:
        "Industry says using the technology at higher speeds is impractical and too costly; regulators say the move would reduce accidents",
      url: "https://www.wsj.com/business/autos/carmakers-file-challenge-to-parts-of-new-automatic-braking-rule-ebb653e9",
      urlToImage: "https://images.wsj.net/im-973059/social",
      publishedAt: "2024-06-24T20:29:34Z",
      content:
        "A trade group representing carmakers is pushing back on a rule that requires automated emergency-braking systems in future vehicles, arguing the requirements are nearly impossible to meet and would b… [+418 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "Dalvin Brown and Katherine Hamilton",
      title: "AI is helping scammers outsmart you and your bank",
      description:
        "Your “spidey sense” is no match for the new wave of scammers.",
      url: "https://www.wsj.com/tech/cybersecurity/ai-is-helping-scammers-outsmart-youand-your-bank-23bbbced",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/acKydOhkcMvbgM.yY5db1w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/the_wall_street_journal_hosted_996/21e7efc0aea5c3b1caf01f3d592c2a6c",
      publishedAt: "2024-06-22T09:30:00Z",
      content:
        "Artificial intelligence is making scammers tougher to spot.\r\nGone are the poorly worded messages that easily tipped off authorities as well as the grammar police. The bad guys are now better writers … [+6695 chars]",
    },
    {
      source: {
        id: "the-wall-street-journal",
        name: "The Wall Street Journal",
      },
      author: "David Uberti and Nick Timiraos",
      title: "Inflation Eased to 3.3% in May, Slightly Lower Than Expected",
      description:
        "The consumer-price index, a measure of goods and service costs across the economy, rose 3.3% annually last month, the Labor Department said.",
      url: "https://www.wsj.com/economy/central-banking/cpi-report-fed-meeting-interest-rate-ef93c8b0",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/MQ2IN8h7LygvL1ShbuIRHg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/the_wall_street_journal_hosted_996/1cae6e07480042bda7bff5f02cf76482",
      publishedAt: "2024-06-12T13:03:00Z",
      content:
        "Wednesdays inflation report was better than many investors expectations. - Richard B. Levine/Zuma Press\r\nU.S. inflation slowed in May, an ease in price pressures that should boost the likelihood of i… [+3743 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h2 className="text-center my-4">Top Headings</h2>
          <div className="container row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4 ml-2" key={element.url}>
                  <NewsItem
                    title={element.title.slice(0, 45)}
                    description={element.description.slice(0, 60)}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
