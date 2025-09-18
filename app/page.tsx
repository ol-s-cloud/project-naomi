'use client';
import { useState } from 'react';

export default function NAOMIHomepage() {
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [chatMessage, setChatMessage] = useState('');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    volume: '',
    message: ''
  });

  const markets = [
    { 
      id: 'forex', 
      name: 'Forex', 
      icon: '💱', 
      title: 'Foreign Exchange Markets',
      features: [
        'Connect funded accounts: FTMO, MyForexFunds, The5ers',
        'Prop firm integration: ApexTraders, Rithmic, Tradovate',
        'Automated trading bots with custom ML models',
        'Train on your own trading patterns & risk tolerance',
        'Support for MT4, MT5, cTrader platforms',
        'Major pairs: EUR/USD, GBP/USD, USD/JPY coverage'
      ]
    },
    { 
      id: 'crypto', 
      name: 'Crypto', 
      icon: '₿', 
      title: 'Cryptocurrency Trading',
      features: [
        'CEX Integration: Binance, Coinbase, Kraken, FTX',
        'DEX Support: Uniswap, SushiSwap, PancakeSwap',
        'Cross-chain operations: Ethereum, BSC, Polygon',
        'DeFi yield farming & liquidity provision',
        'Custom ML models for volatility prediction'
      ]
    },
    { 
      id: 'stocks', 
      name: 'Stocks', 
      icon: '📈', 
      title: 'Equity Markets',
      features: [
        'Blue-chip stocks: AAPL, TSLA, NVDA, MSFT, GOOGL',
        'Integration with TD Ameritrade, E*TRADE, Schwab',
        'Sector rotation strategies with ML insights',
        'Options trading automation & Greeks analysis',
        'Real-time earnings impact prediction models'
      ]
    },
    { 
      id: 'bonds', 
      name: 'Bonds', 
      icon: '📊', 
      title: 'Fixed Income Securities',
      features: [
        'Treasury bonds: 2Y, 10Y, 30Y yield curve analysis',
        'Corporate bond ratings & credit risk assessment',
        'Municipal bonds tax optimization strategies',
        'Interest rate sensitivity ML modeling',
        'Duration hedging & convexity calculations'
      ]
    },
    { 
      id: 'etf', 
      name: 'ETFs', 
      icon: '🏢', 
      title: 'Exchange Traded Funds',
      features: [
        'Popular ETFs: SPY, QQQ, VTI, ARKK, TQQQ',
        'Sector ETF rotation: XLF, XLK, XLE, XLV',
        'Commodity ETFs: GLD, SLV, USO integration',
        'International exposure: EFA, EEM, FXI',
        'Custom portfolio rebalancing algorithms'
      ]
    },
    { 
      id: 'commodities', 
      name: 'Commodities', 
      icon: '🛢️', 
      title: 'Raw Materials Trading',
      features: [
        'Energy: Crude Oil, Natural Gas, Gasoline futures',
        'Metals: Gold, Silver, Copper, Platinum contracts',
        'Agricultural: Wheat, Corn, Soybeans, Coffee',
        'Seasonal pattern recognition with ML',
        'Supply chain disruption impact modeling'
      ]
    }
  ];

  const features = [
    {
      title: 'Machine Learning Strategy Engine',
      description: 'Advanced ensemble learning with gradient boosting, neural networks, and reinforcement learning for strategy optimization',
      icon: '⚡'
    },
    {
      title: 'Explainable ML Models',
      description: 'SHAP values, LIME interpretability, and feature importance analysis for transparent decision-making processes',
      icon: '🔬'
    },
    {
      title: 'Multi-Platform Integration',
      description: 'Direct API connections to 50+ exchanges, brokers, and data providers with millisecond latency execution',
      icon: '🔗'
    },
    {
      title: 'Professional Charting Suite',
      description: 'Seamless integration with TradingView, NinjaTrader, and your favorite charting platforms for advanced technical analysis',
      icon: '📊'
    },
    {
      title: 'Advanced Analytics Suite',
      description: 'Real-time performance attribution, drawdown analysis, and predictive risk metrics with institutional-grade reporting',
      icon: '📈'
    },
    {
      title: 'Enterprise Infrastructure',
      description: 'Cloud-native architecture with 99.9% uptime, enterprise security, and scalable compute resources',
      icon: '🏗️'
    }
  ];

  const handleWaitlistSubmit = () => {
    if (email) {
      alert('Thank you for joining the waitlist! We will contact you within 24 hours.');
      setEmail('');
      setShowWaitlist(false);
    }
  };

  const handleStripePayment = () => {
    window.open('https://buy.stripe.com/your-payment-link', '_blank');
  };

  const handleMonthlyWaitlist = () => {
    setShowWaitlist(true);
  };

  const handleContactSubmit = () => {
    if (contactForm.name && contactForm.email) {
      alert('Thank you for your message! We will contact you within 24 hours.');
      setContactForm({ name: '', email: '', company: '', volume: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <nav className="container mx-auto px-8 py-8">
        <div className="flex items-center justify-center relative">
          <div className="text-3xl font-light tracking-wider">
            NAOMI
          </div>
          <button
            onClick={() => setShowWaitlist(true)}
            className="absolute right-0 border border-white/20 hover:border-white/40 px-8 py-3 font-light tracking-wide transition-all hover:bg-white/5"
          >
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-8 py-24 text-center">
        <h1 className="text-8xl md:text-9xl font-extralight tracking-widest mb-8">
          NAOMI
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-6 tracking-wide">
          Nonlinear Algorithmic Operations for Multi-platform Integration
        </h2>

        <p className="text-xl font-light text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed">
          Institutional-grade trading infrastructure powered by explainable machine learning, 
          ensemble modeling, and cross-platform integration across global financial markets.
        </p>
      </div>

      {/* Market Selection - Side by Side Layout */}
      <div className="py-24">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-light mb-6">
              Market Access ✨
            </h3>
            <p className="text-xl font-light text-gray-300">
              Choose your trading universe
            </p>
          </div>

          {/* Side by Side Market Cards */}
          <div className="grid lg:grid-cols-2 gap-0 max-w-7xl mx-auto">
            {/* Left Side Markets */}
            <div className="bg-white/10 p-12 border-r border-white/10">
              <div className="space-y-8">
                {markets.slice(0, 3).map((market) => (
                  <div key={market.id} className="bg-white/5 border border-white/20 p-8 hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-sm">
                    <div className="flex items-start space-x-6">
                      <div className="text-5xl">{market.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-light mb-2">{market.name}</h4>
                        <div className="text-gray-300 mb-4 font-light">{market.title}</div>
                        <div className="grid gap-3">
                          {market.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
                              <div className="text-sm font-light text-gray-300">{feature}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Markets */}
            <div className="bg-black p-12">
              <div className="space-y-8">
                {markets.slice(3, 6).map((market) => (
                  <div key={market.id} className="bg-white/5 border border-white/20 p-8 hover:bg-white/10 hover:border-white/30 transition-all backdrop-blur-sm">
                    <div className="flex items-start space-x-6">
                      <div className="text-5xl">{market.icon}</div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-light mb-2">{market.name}</h4>
                        <div className="text-gray-300 mb-4 font-light">{market.title}</div>
                        <div className="grid gap-3">
                          {market.features.slice(0, 3).map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <div className="w-1 h-1 bg-white rounded-full mt-2 flex-shrink-0"></div>
                              <div className="text-sm font-light text-gray-300">{feature}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Clean Layout */}
      <div className="py-24 bg-white/5">
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-light text-center mb-20 tracking-wide">
            Technology Stack ⚡
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/10 border border-white/20 p-8 hover:bg-white/15 hover:border-white/30 transition-all backdrop-blur-sm"
              >
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-light mb-4">{feature.title}</h3>
                <p className="font-light text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section - Clean Side by Side */}
      <div className="py-24">
        <div className="container mx-auto px-8">
          <h2 className="text-5xl font-light text-center mb-20 tracking-wide">
            Pricing Plans 💎
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* One-Time Access */}
            <div className="bg-white/10 border border-white/30 p-12 relative backdrop-blur-sm">
              <div className="absolute -top-4 left-8 bg-white text-black px-6 py-2 font-light text-sm tracking-wide">
                PREMIUM ACCESS
              </div>
              
              <div className="text-center mb-10">
                <div className="text-sm font-light text-gray-400 mb-2">ONE-TIME PAYMENT</div>
                <div className="text-7xl font-extralight mb-2">£750</div>
                <div className="text-lg font-light text-gray-300">Lifetime access</div>
                <div className="text-sm text-gray-300 mt-2 font-light">No recurring fees • Full ownership</div>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  'Complete market ecosystem access',
                  'Custom ML model training & optimization',
                  'Unlimited exchange integrations', 
                  'White-glove support & priority updates',
                  'Enterprise-grade infrastructure',
                  'Advanced analytics & reporting suite'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-light">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleStripePayment}
                className="w-full bg-white text-black py-6 text-xl font-light tracking-wide hover:bg-gray-200 transition-all"
              >
                GET PREMIUM ACCESS
              </button>
              
              <div className="text-center mt-6 text-sm font-light text-gray-400">
                🔒 Stripe secured • 30-day money-back guarantee
              </div>
            </div>

            {/* Monthly Subscription */}
            <div className="bg-black border border-white/20 p-12 backdrop-blur-sm">
              <div className="text-center mb-10">
                <div className="text-sm font-light text-gray-400 mb-2">MONTHLY SUBSCRIPTION</div>
                <div className="text-7xl font-extralight mb-2">£99.99</div>
                <div className="text-lg font-light text-gray-300">Per month</div>
                <div className="text-sm text-gray-400 mt-2">Cancel anytime • Flexible billing</div>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  'Full market access (all 6 asset classes)',
                  'Standard ML model training',
                  'Core platform integrations',
                  'Standard support channels',
                  'Monthly billing cycle',
                  'Regular feature updates'
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-2 h-2 border border-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-light">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleMonthlyWaitlist}
                className="w-full border border-white/30 py-6 text-xl font-light tracking-wide hover:border-white/50 hover:bg-white/10 transition-all"
              >
                START MONTHLY PLAN
              </button>
              
              <div className="text-center mt-6 text-sm font-light text-gray-400">
                Available now • Join thousands of active traders
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-light mb-8 tracking-wide">
              Get In Touch
            </h2>
            <p className="text-xl font-light text-gray-300">
              Ready to revolutionize your trading operations? Let's discuss your requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-white/5 border border-white/10 p-12">
              <h3 className="text-2xl font-light mb-8">Send us a message</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-light text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 font-light focus:outline-none focus:border-white/40 transition-all"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 font-light focus:outline-none focus:border-white/40 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-300 mb-2">Company</label>
                  <input
                    type="text"
                    value={contactForm.company}
                    onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 font-light focus:outline-none focus:border-white/40 transition-all"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-300 mb-2">Trading Volume (Monthly)</label>
                  <select 
                    value={contactForm.volume}
                    onChange={(e) => setContactForm({...contactForm, volume: e.target.value})}
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 font-light focus:outline-none focus:border-white/40 transition-all text-white"
                  >
                    <option value="" className="bg-black">Select volume range</option>
                    <option value="under-100k" className="bg-black">Under £100K</option>
                    <option value="100k-1m" className="bg-black">£100K - £1M</option>
                    <option value="1m-10m" className="bg-black">£1M - £10M</option>
                    <option value="over-10m" className="bg-black">Over £10M</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-light text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={6}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full bg-white/5 border border-white/20 px-4 py-3 font-light focus:outline-none focus:border-white/40 transition-all resize-none"
                    placeholder="Tell us about your trading needs and current setup..."
                  ></textarea>
                </div>
                
                <button 
                  onClick={handleContactSubmit}
                  className="w-full bg-white text-black py-4 font-light tracking-wide hover:bg-gray-100 transition-all"
                >
                  SEND MESSAGE
                </button>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-light mb-6">Enterprise Solutions</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🏢</div>
                    <div>
                      <div className="font-light text-gray-300">Institutional Trading</div>
                      <div className="text-sm text-gray-400">Custom ML models for hedge funds, prop trading firms, and family offices</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">⚡</div>
                    <div>
                      <div className="font-light text-gray-300">High-Frequency Trading</div>
                      <div className="text-sm text-gray-400">Low-latency execution with microsecond precision across multiple venues</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl">🔒</div>
                    <div>
                      <div className="font-light text-gray-300">White-Label Solutions</div>
                      <div className="text-sm text-gray-400">Deploy NAOMI under your brand with custom integrations and branding</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-light mb-6">Get Started</h3>
                <div className="space-y-4">
                  <div className="bg-white/5 border border-white/10 p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-xl">📞</div>
                      <div className="font-light">Book a Demo</div>
                    </div>
                    <div className="text-sm text-gray-400 mb-4">
                      Schedule a personalized demo with our trading technology specialists
                    </div>
                    <button className="border border-white/30 px-6 py-2 font-light text-sm hover:border-white/50 hover:bg-white/5 transition-all">
                      SCHEDULE DEMO
                    </button>
                  </div>
                  
                  <div className="bg-white/5 border border-white/10 p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="text-xl">💬</div>
                      <div className="font-light">Live Chat</div>
                    </div>
                    <div className="text-sm text-gray-400 mb-4">
                      Connect with our support team for immediate assistance
                    </div>
                    <button 
                      onClick={() => setChatOpen(true)}
                      className="border border-white/30 px-6 py-2 font-light text-sm hover:border-white/50 hover:bg-white/5 transition-all"
                    >
                      START CHAT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-8 py-16 text-center border-t border-white/10">
        <div className="text-3xl font-light mb-6 tracking-wider">
          NAOMI
        </div>
        <p className="font-light text-gray-400 mb-6">
          Nonlinear Algorithmic Operations for Multi-platform Integration
        </p>
        <p className="text-gray-500 text-sm">
          © 2025 Project NAOMI. All rights reserved.
        </p>
      </footer>

      {/* Chat Widget */}
      <div className="fixed bottom-8 right-8 z-50">
        {!chatOpen ? (
          <button
            onClick={() => setChatOpen(true)}
            className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-2xl hover:bg-gray-100 transition-all"
          >
            💬
          </button>
        ) : (
          <div className="bg-black border border-white/20 w-80 h-96 flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <h3 className="font-light">Market Intelligence</h3>
              <button
                onClick={() => setChatOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="bg-white/5 border border-white/10 p-4 mb-4">
                <p className="text-sm font-light text-gray-300">
                  Advanced market analysis and strategy consultation available. 
                  Ask about ML model performance, risk metrics, or platform integrations.
                </p>
              </div>
            </div>
            <div className="p-6 border-t border-white/10">
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Query market intelligence..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="flex-1 bg-white/5 border border-white/20 px-4 py-2 text-sm focus:outline-none focus:border-white/40"
                />
                <button className="bg-white text-black px-4 py-2 hover:bg-gray-100 transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Waitlist Modal */}
      {showWaitlist && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8">
          <div className="bg-black border border-white/20 p-12 max-w-md w-full">
            <h3 className="text-3xl font-light mb-6 text-center">Access Request</h3>
            <p className="font-light text-gray-300 text-center mb-8">
              Join our exclusive waitlist for priority access to institutional-grade trading infrastructure
            </p>
            <div>
              <input
                type="email"
                placeholder="Enter institutional email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/20 px-4 py-4 mb-6 focus:outline-none focus:border-white/40 font-light"
              />
              <div className="flex space-x-4">
                <button
                  onClick={() => setShowWaitlist(false)}
                  className="flex-1 border border-white/20 py-4 font-light hover:border-white/40 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleWaitlistSubmit}
                  className="flex-1 bg-white text-black py-4 font-light hover:bg-gray-100 transition-all"
                >
                  Request Access
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}