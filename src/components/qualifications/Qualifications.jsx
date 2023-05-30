import { useState } from 'react';
import './qualifications.css';

export const Qualifications = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggle === 1
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
          <div
            className={
              toggle === 2
                ? 'qualification__button qualification__active button--flex'
                : 'qualification__button button--flex'
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggle === 1
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            {/* first set entry */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Backend Bootcamp</h3>
                <span className="qualification__subtitle">
                  Barcelona Activa
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Social Media Management
                </h3>
                <span className="qualification__subtitle">
                  Barcelona Formació
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
            </div>

            {/* second set entry */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  MBA International Marketing
                </h3>
                <span className="qualification__subtitle">
                  EU Business School
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Marketing BA</h3>
                <span className="qualification__subtitle">
                  West Virginia University
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2013 - 2016
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2
                ? 'qualification__content qualification__content-active'
                : 'qualification__content'
            }
          >
            {/* first set entry */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Marketing Strategist</h3>
                <span className="qualification__subtitle">
                  Alfa Beta Consultants
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Marketing and Sales Coordinate
                </h3>
                <span className="qualification__subtitle">GlobalPay</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2019
                </div>
              </div>
            </div>

            {/* second set entry */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Social Media Manager</h3>
                <span className="qualification__subtitle">
                  GlobalPay Services
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Junior Marketer </h3>
                <span className="qualification__subtitle">The Power Group</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2016 - 2018
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
