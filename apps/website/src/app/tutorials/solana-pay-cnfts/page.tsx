'use client';
import React, { useState, useEffect } from 'react';
import { remark } from 'remark';
import html from 'remark-html';
import style from '../../../../styles/markdown.module.css';

const Tutorial: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [mapJson, setMapJson] = useState({} as any);
  const [urlIndex, setUrlIndex] = useState(0);
  const [urlList, setUrlList] = useState<string[]>([]);
  const [markdown, setMarkdown] = useState('');
  const [styledMarkdown, setStyledMarkdown] = useState('');

  async function fetchMarkdowns() {
    const map = await fetch(
      'https://raw.githubusercontent.com/swissDAO/solana-pay-cnfts/main/map.json'
    );
    const map_json = await map.json();
    setMapJson(map_json);

    const urls = Object.keys(map_json).map(key => {
      return `https://raw.githubusercontent.com/swissDAO/solana-pay-cnfts/main/${key.slice(
        0,
        9
      )}/${map_json[key]}`;
    });
    setUrlList(urls);
    setLoading(false);
  }

  const fetchMarkdownData = async () => {
    const res = await fetch(urlList[urlIndex]);
    const markdown = await res.text();
    setMarkdown(markdown);
  };

  async function getPostData() {
    // Use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(markdown);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    setStyledMarkdown(contentHtml);
  }

  const renderMarkdown = () => {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: styledMarkdown }}
        className={style.markdown}
      ></div>
    );
  };

  useEffect(() => {
    fetchMarkdowns();
    if (!loading) {
      fetchMarkdownData();
    }
    if (!loading && markdown) {
      getPostData();
    }
  }, [loading, markdown]);

  useEffect(() => {
    fetchMarkdownData().then(() => {
      getPostData();
    });
  }, [urlIndex]);

  return (
    <div className={style.parentContainer}>
      <div
        className={style.sideNavContainer}
      >
        {/* map the mapJson keys */}
        {Object.keys(mapJson).map(key => {
          return (
            <div
              className={style.sideNavButton}
              onClick={() => {
                setUrlIndex(Object.keys(mapJson).indexOf(key));
                fetchMarkdownData();
              }}
            >            
              <li>{mapJson[key].slice(9, -3).replace(/_/g, ' ')}</li>
            </div>
          );
        })}
      </div>
      <div
        className={style.tutorialContainer}
      >
        <div className={style.buttonContainer}>
          {urlIndex > 0 ? (
            <button
              onClick={() => {
                setUrlIndex(urlIndex - 1);
                fetchMarkdownData();
              }}
            >
              Previous
            </button>
          ) : (
            <></>
          )}
          {urlIndex < urlList.length - 1 ? (
            <button
              onClick={() => {
                setUrlIndex(urlIndex + 1);
                fetchMarkdownData();
              }}
            >
              Next
            </button>
          ) : (
            <></>
          )}
        </div>
        {loading && styledMarkdown != '' ? (
          <div>Loading...</div>
        ) : (
          renderMarkdown()
        )}
        <div className={style.buttonContainer}>
          {urlIndex > 0 ? (
            <button
              onClick={() => {
                setUrlIndex(urlIndex - 1);
                fetchMarkdownData();
              }}
            >
              Previous
            </button>
          ) : (
            <></>
          )}
          {urlIndex < urlList.length - 1 ? (
            <button
              onClick={() => {
                setUrlIndex(urlIndex + 1);
                fetchMarkdownData();
              }}
            >
              Next
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
