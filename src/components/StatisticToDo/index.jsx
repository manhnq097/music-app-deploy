import './StatisticToDo.scss';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useTranslation } from "react-i18next";

const StatisticTodo = () => {
  const { t } = useTranslation();

  return (
    <div className="statistic-todo">
      <Grid container spacing={3}>
        <Grid item md={3} xs={6}>
          <div className="statistic-item processing">
            <div className="statistic-left">
              <div className="statistic-amount">22</div>
              <div className="statistic-title">{t('Processing')}</div>
            </div>
            <div className="statistic-right">
              <div className="statistic-icon">
                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="running" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-running fa-w-14 fa-3x"><path fill="currentColor" d="M396 216h-14.53l-9.04-27.12c-8.11-24.31-24.18-44-44.5-58.04C347 117.91 360 96.73 360 72c0-39.7-32.3-72-72-72s-72 32.3-72 72c0 8.34 1.56 16.28 4.2 23.72-8.62-1.98-17.37-3.22-26.13-3.22-20.55 0-40.8 5.53-58.64 16l-46.19 24.07C64.7 147.31 56.7 179.3 71.4 203.88c9.39 15.62 26.48 25.27 44.63 25.27 8.98 0 17.82-2.33 25.65-6.76l18.95-9.85L101.75 344H52c-28.67 0-52 23.33-52 52s23.33 52 52 52h62.91c33.65 0 63.95-19.99 77.2-50.92l19.32-39.74 43.7 19.63-19.64 68.74c-7.87 27.58 8.15 56.42 35.71 64.29 4.8 1.34 9.55 2 14.31 2 23.07 0 43.62-15.5 49.98-37.69l24.4-85.4c7.11-24.86 2.02-50.92-12.01-71.12 6.2 1.45 12.63 2.21 19.2 2.21H396c28.67 0 52-23.33 52-52s-23.33-52-52-52zM288 32c22.09 0 40 17.91 40 40s-17.91 40-40 40-40-17.91-40-40 17.91-40 40-40zM162.69 384.48A51.915 51.915 0 0 1 114.91 416H52c-11.05 0-20-8.95-20-20s8.95-20 20-20h62.91c4.8 0 9.12-2.86 11.03-7.28l26.72-56.88c6.9 12.72 17.07 23.57 29.98 31.43l-19.95 41.21zM396 288h-28.94a51.94 51.94 0 0 1-49.33-35.55l-13.59-40.8c-2.83-8.46-8.21-15.43-15-20.67l-41.47 103.69 52.78 23.72c23.41 10.55 35.72 37.09 28.67 61.73l-24.39 85.38c-2.52 8.78-10.52 14.5-19.22 14.5-1.83 0-3.67-.25-5.52-.77-10.61-3.03-16.77-14.11-13.73-24.73l24.39-85.38c1.64-5.69-1.22-11.81-6.62-14.25 0 0-85.82-39.04-88.71-41.16-17.8-13.09-25.42-36.48-18.51-57.88l37.75-87.57s-16.9-3.77-20.5-3.77c-7.88 0-15.59 2.14-22.5 6.31l-45.25 23.52a20.137 20.137 0 0 1-10.29 2.84c-6.8 0-13.41-3.46-17.16-9.7-5.67-9.48-2.61-21.77 6.86-27.45l45.26-23.52c13.24-7.93 28.06-11.99 43.1-11.99 6.83 0 13.72.84 20.51 2.53l68.19 17.05c28 6.98 50.17 27.52 59.31 54.92l13.59 40.8c1.64 4.91 6.22 8.2 11.39 8.2H396c11.05 0 20 8.95 20 20s-8.95 20-20 20z" className=""></path></svg>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={3} xs={6}>
          <div className="statistic-item finished">
            <div className="statistic-left">
              <div className="statistic-amount">22</div>
              <div className="statistic-title">{t('Finished')}</div>
            </div>
            <div className="statistic-right">
              <div className="statistic-icon">
                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="check-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-check-circle fa-w-16 fa-3x"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" className=""></path></svg>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={3} xs={6}>
          <div className="statistic-item expired">
            <div className="statistic-left">
              <div className="statistic-amount">22</div>
              <div className="statistic-title">{t('Expired')}</div>
            </div>
            <div className="statistic-right">
              <div className="statistic-icon">
                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="calendar-times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="svg-inline--fa fa-calendar-times fa-w-14 fa-3x"><path fill="currentColor" d="M400 64h-48V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H128V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h352c8.8 0 16 7.2 16 16v48H32v-48c0-8.8 7.2-16 16-16zm352 384H48c-8.8 0-16-7.2-16-16V192h384v272c0 8.8-7.2 16-16 16zm-105.3-95.9c4.7 4.7 4.7 12.3 0 17l-5.7 5.7c-4.7 4.7-12.3 4.7-17 0l-48-48.2-48.1 48.1c-4.7 4.7-12.3 4.7-17 0l-5.7-5.7c-4.7-4.7-4.7-12.3 0-17l48.1-48.1-48.1-48.1c-4.7-4.7-4.7-12.3 0-17l5.7-5.7c4.7-4.7 12.3-4.7 17 0l48.1 48.1 48.1-48.1c4.7-4.7 12.3-4.7 17 0l5.7 5.7c4.7 4.7 4.7 12.3 0 17L246.6 336l48.1 48.1z" className=""></path></svg>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item md={3} xs={6}>
          <div className="statistic-item cancel">
            <div className="statistic-left">
              <div className="statistic-amount">22</div>
              <div className="statistic-title">{t('Cancel')}</div>
            </div>
            <div className="statistic-right">
              <div className="statistic-icon">
                <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="power-off" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-power-off fa-w-16 fa-3x"><path fill="currentColor" d="M388.5 46.3C457.9 90.3 504 167.8 504 256c0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 168 54 90.3 123.5 46.3c5.8-3.7 13.5-1.8 16.9 4.2l3.9 7c3.1 5.6 1.3 12.6-4.1 16C79.9 112 40 179.6 40 256c0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216 0-77-40.1-144.2-100.3-182.4-5.4-3.4-7.2-10.5-4.1-16l3.9-7c3.4-6.1 11.2-7.9 17-4.3zM272 276V12c0-6.6-5.4-12-12-12h-8c-6.6 0-12 5.4-12 12v264c0 6.6 5.4 12 12 12h8c6.6 0 12-5.4 12-12z" className=""></path></svg>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default StatisticTodo;