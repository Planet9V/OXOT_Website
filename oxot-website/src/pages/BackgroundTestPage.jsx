import BackgroundComparison from '../components/backgrounds/BackgroundComparison';

/**
 * Test page for comparing background animation approaches
 * Access at /background-test
 */
export default function BackgroundTestPage() {
  return (
    <div className="background-test-page">
      <BackgroundComparison />

      <div className="content">
        <h1>OXOT Background Test</h1>
        <p>Use the controls at the bottom to switch between background implementations</p>
      </div>

      <style jsx>{`
        .content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
          padding: 20px;
        }

        h1 {
          font-size: 48px;
          color: #fff;
          margin: 0 0 20px 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
        }

        p {
          font-size: 18px;
          color: #ccc;
          max-width: 600px;
        }
      `}</style>
    </div>
  );
}
