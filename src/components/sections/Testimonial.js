import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Conheça nossa loja online: IC&V Store',
    paragraph: 'Nossa loja conta com artigos e roupas esportivas, tanto para crianças quanto para adultos.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div>
                  <p className="text-sm mb-0">
                    <Image
                      src={require('./../../assets/images/psi/loja2.jpg')}
                      alt="Features tile icon 01"
                      width={528}
                      height={396} />
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div>
                  <p className="text-sm mb-0">
                    <Image
                      src={require('./../../assets/images/psi/loja1.jpg')}
                      alt="Features tile icon 01"
                      width={528}
                      height={396} />
                  </p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div>
                  <p className="text-sm mb-0">
                    <Image
                      src={require('./../../assets/images/psi/loja20.jpg')}
                      alt="Features tile icon 01"
                      width={528}
                      height={396} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div>
                  <p className="text-sm mb-0">
                    <Image
                      src={require('./../../assets/images/psi/loja5.jpg')}
                      alt="Features tile icon 01"
                      width={528}
                      height={396} />
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div>
                  <p className="text-sm mb-0">
                    <Image
                      src={require('./../../assets/images/psi/loja4.jpg')}
                      alt="Features tile icon 01"
                      width={528}
                      height={396} />
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div>
                  <p className="text-sm mb-0">
                    <Image
                      src={require('./../../assets/images/psi/loja6.jpg')}
                      alt="Features tile icon 01"
                      width={528}
                      height={396} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div>
                  <p className="text-sm mb-0">
                    <Image
                      src={require('./../../assets/images/psi/loja8.jpg')}
                      alt="Features tile icon 01"
                      width={528}
                      height={396} />
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div>
                  <p className="text-sm mb-0">
                    <Image
                      src={require('./../../assets/images/psi/loja7.jpg')}
                      alt="Features tile icon 01"
                      width={528}
                      height={396} />
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div>
                  <p className="text-sm mb-0">
                    <Image
                      src={require('./../../assets/images/psi/loja9.jpg')}
                      alt="Features tile icon 01"
                      width={528}
                      height={396} />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div>
                  <p className="text-sm mb-0">
                    <Image
                      src={require('./../../assets/images/psi/time1.jpg')}
                      alt="Features tile icon 01"
                      width={528}
                      height={396} />
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div>
                  <p className="text-sm mb-0">
                    <Image
                      src={require('./../../assets/images/psi/time2.jpg')}
                      alt="Features tile icon 01"
                      width={528}
                      height={396} />
                  </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div>
                  <p className="text-sm mb-0">
                    <Image
                      src={require('./../../assets/images/psi/time3.jpg')}
                      alt="Features tile icon 01"
                      width={528}
                      height={396} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;