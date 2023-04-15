import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTrackPlayFavourite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M10.211 8.96c-.47.098-.921.47-1.094.9l-.097.24v3.8l.096.24c.134.333.497.694.824.819.281.107.749.128 1 .044.088-.03.928-.438 1.866-.907 1.872-.937 1.96-.995 2.181-1.446.102-.208.113-.27.113-.65 0-.383-.01-.441-.117-.658-.217-.442-.31-.503-2.157-1.428a61.29 61.29 0 0 0-1.834-.897 1.806 1.806 0 0 0-.781-.057m6.233 7.103c-.617.166-1.11.645-1.332 1.293-.071.208-.09.353-.09.684-.001.491.067.75.289 1.112.191.311 2.192 2.474 2.418 2.614a1.398 1.398 0 0 0 1.542 0c.203-.126 2.212-2.284 2.398-2.576.225-.354.311-.673.31-1.15-.001-.33-.02-.477-.091-.684-.314-.916-1.162-1.464-2.051-1.326-.403.062-.727.237-1.059.572l-.274.276-.302-.292a2.56 2.56 0 0 0-.522-.399 1.8 1.8 0 0 0-1.236-.124'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTrackPlayFavourite);
export default ForwardRef;
