import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgSpeakerMute = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M17.807 9.288c-.376.083-.606.483-.517.902.037.176.101.251.843 1l.804.811-.804.809c-.864.871-.921.955-.882 1.295a.741.741 0 0 0 1.02.594c.095-.04.435-.347.939-.85l.79-.788.79.788c.504.503.844.81.939.85a.741.741 0 0 0 1.02-.594c.039-.34-.018-.424-.883-1.295l-.804-.811.787-.789c.503-.505.81-.844.85-.939a.741.741 0 0 0-.594-1.02c-.34-.039-.424.018-1.295.882l-.809.804-.811-.804c-.652-.646-.837-.809-.95-.831l-.2-.04a.841.841 0 0 0-.233.026'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgSpeakerMute);
export default ForwardRef;
