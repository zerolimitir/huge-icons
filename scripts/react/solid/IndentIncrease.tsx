import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgIndentIncrease = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M5.811 5.279a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.225.063 12.213.063 12.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-6.143-.006c-3.379-.004-6.201.008-6.272.025M5.66 9.307a.696.696 0 0 0-.344.341.807.807 0 0 0-.012.644c.035.07.417.483.849.918l.785.789-.805.811c-.692.695-.813.835-.852.985a.749.749 0 0 0 .924.924c.153-.04.315-.184 1.288-1.152.612-.609 1.137-1.153 1.166-1.208a.792.792 0 0 0 .061-.563c-.041-.155-.181-.311-1.153-1.29-.718-.723-1.163-1.141-1.267-1.19-.195-.091-.478-.095-.64-.009m5.151-.029a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.223.062 7.215.062 7.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-3.643-.006c-2.004-.004-3.701.007-3.772.024m0 4a.765.765 0 0 0-.551.607c-.063.335.19.739.521.83.223.062 7.215.062 7.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.324-.832l-.169-.112-3.643-.006c-2.004-.004-3.701.007-3.772.024m-5 4.001a.76.76 0 0 0-.551.606c-.063.335.19.739.521.83.225.063 12.213.063 12.438 0 .212-.058.441-.293.5-.511.089-.331-.03-.638-.325-.832l-.168-.112-6.143-.006c-3.379-.004-6.201.008-6.272.025'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgIndentIncrease);
export default ForwardRef;
