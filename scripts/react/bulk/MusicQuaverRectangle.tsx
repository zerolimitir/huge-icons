import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMusicQuaverRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 7.316a.734.734 0 0 0-.398.413c-.053.127-.062.416-.062 1.97 0 1.001-.01 1.821-.022 1.821a.721.721 0 0 1-.138-.06c-.195-.101-.763-.219-1.052-.22-.423 0-.845.103-1.267.31-.31.152-.438.246-.707.515-.273.273-.36.394-.508.702-.409.851-.409 1.615 0 2.466.148.31.235.429.513.708.279.278.398.365.708.513.205.099.503.208.661.243 1.217.267 2.527-.382 3.057-1.515.26-.556.249-.413.273-3.507l.022-2.825.272.091c.894.302 1.679 1.074 1.993 1.962.102.287.191.765.194 1.037.007.594.555.978 1.061.744.432-.199.543-.596.398-1.429-.277-1.597-1.264-2.902-2.702-3.571-.808-.376-1.9-.551-2.296-.368'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMusicQuaverRectangle);
export default ForwardRef;
