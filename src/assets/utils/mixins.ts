type ITransformMixins = {
  _propety?: string;
  _duration?: string;
  _timing?: string;
  _delay?: string;
};
export const transformationMix = ({
  _propety = 'all',
  _duration = '0.2s',
  _timing = 'linear',
  _delay = '0s',
}: ITransformMixins): string => `
  transition-property: ${_propety};
  transition-duration: ${_duration};
  transition-timing-function: ${_timing};
  transition-delay: ${_delay};
`;

type IPositionAbsolute = {
  _top?: string | null;
  _left?: string | null;
  _right?: string | null;
  _bottom?: string | null;
};

export const positionAbsolute = ({
  _top = null,
  _left = null,
  _right = null,
  _bottom = null,
}: IPositionAbsolute): string => `
  position: absolute;
  top: ${_top};
  left: ${_left};
  right: ${_right};
  bottom: ${_bottom};
`;
