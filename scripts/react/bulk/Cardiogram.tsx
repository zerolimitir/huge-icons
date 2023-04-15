import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgCardiogram = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9.7 8.316a.872.872 0 0 0-.245.169 45.88 45.88 0 0 0-.97 1.425l-.886 1.33-2.369.001c-2.228.001-2.38.005-2.535.076-.635.288-.537 1.253.143 1.399.138.029 1.042.044 2.745.044 2.729 0 2.702.002 2.922-.205.048-.045.398-.548.778-1.119s.706-1.033.724-1.027c.018.006.802 1.163 1.743 2.571 1.213 1.816 1.749 2.586 1.844 2.649a.717.717 0 0 0 .812 0c.091-.061.43-.532 1.065-1.479l.93-1.39h2.278c1.512 0 2.346-.015 2.483-.044.68-.146.778-1.111.143-1.399-.156-.071-.313-.075-2.796-.076-2.83-.001-2.793-.004-3.014.204-.048.045-.398.548-.777 1.118-.38.57-.703 1.037-.718 1.037-.015 0-.788-1.142-1.718-2.538-.931-1.395-1.73-2.573-1.777-2.618a.734.734 0 0 0-.805-.128'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgCardiogram);
export default ForwardRef;
