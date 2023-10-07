import React, {useState} from 'react';
import {useGlobalContext} from "../Context.jsx";
import "../assets/styles/Gitashlok.css"

const Gitashlok = () => {
    const [open, setOpen] = useState(false);

    const showBody = () => {
        setOpen(!open);
    }



    const {verse} = useGlobalContext();
    if (!verse || !verse.tej || !verse.tej.author) {
        return null; // Render nothing or an alternative component while data is loading
    }

    return (
        <>
            <h1 id={"shlok-title"}>||श्रीमद्‍भगवद्‍-गीता ||</h1>

            <div id={"shlok-information"}>
                <h4>{verse.slok}</h4>
                <h4>{verse.transliteration}</h4>
                <p><span>Chapter</span>: {verse.chapter} <span>Shlok</span>: {verse.verse}</p>
                <h5>Click ＋ to read Commentaries</h5>
            </div>



            <div id="accordion-list">

                {/* Card 1 */}
                <div className="accordion-card">

                    <div className="accordion-header-container" onClick={()=>{ showBody()}}  >
                        <h2 >{verse.tej.author}</h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>
                    <div className="accordion-collapse" style={{display: open? "block":"none"}} >
                        <div className="accordion-body">
                            {verse.tej?.ht}
                        </div>
                    </div>

                </div>


                {/* Card 2 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >{verse.siva.author}</h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>
                    <div className="accordion-collapse" style={{display: open? "block":"none"}}>
                        <div className="accordion-body" style={{display: open? "block":"none"}} >
                            {verse.siva?.et} <br/> <br/>
                            {verse.siva?.ec}
                        </div>
                    </div>
                </div>


                {/* Card 3 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >
                            {verse.purohit.author}
                        </h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>
                    <div className="accordion-collapse" style={{display: open? "block":"none"}}>
                        <div className="accordion-body">
                            {verse.purohit?.et}
                        </div>
                    </div>
                </div>


                {/* Card 4 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >
                            {verse.chinmay.author}
                        </h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>
                    <div className="accordion-collapse" style={{display: open? "block":"none"}} >
                        <div className="accordion-body">
                            {verse.chinmay?.hc}
                        </div>
                    </div>
                </div>



                {/* Card 5 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >
                            {verse.san.author}
                        </h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>
                    <div className="accordion-collapse" style={{display: open? "block":"none"}} >
                        <div className="accordion-body">
                            {verse.san?.et}
                        </div>
                    </div>
                </div>



                {/* Card 6 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >{verse.adi.author}</h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>
                    <div className="accordion-collapse" style={{display: open? "block":"none"}} >
                        <div className="accordion-body">
                            {verse.adi?.et}
                        </div>
                    </div>
                </div>



                {/* Card 7 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >{verse.gambir.author}</h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>
                    <div className="accordion-collapse" style={{display: open? "block":"none"}} >
                        <div className="accordion-body">
                            {verse.gambir?.et}
                        </div>
                    </div>
                </div>


                {/* Card 8 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >{verse.madhav.author}</h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>
                    <div className="accordion-collapse" style={{display: open? "block":"none"}} >
                        <div className="accordion-body">
                            {verse.madhav?.sc}
                        </div>
                    </div>
                </div>


                {/* Card 9 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >
                            {verse.anand.author}
                        </h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>
                    <div className="accordion-collapse" style={{display: open? "block":"none"}} >
                        <div className="accordion-body">
                            {verse.anand?.sc}
                        </div>
                    </div>
                </div>


                {/* Card 10 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >
                            {verse.rams.author}
                        </h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>
                    <div className="accordion-collapse" style={{display: open? "block":"none"}} >
                        <div className="accordion-body">
                            {verse.rams?.ht} <br/> <br/>
                            {verse.rams?.hc}
                        </div>
                    </div>
                </div>



                {/* Card 11 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >
                            {verse.raman.author}
                        </h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>
                    <div className="accordion-collapse" style={{display: open? "block":"none"}} >
                        <div className="accordion-body">
                            {verse.raman?.sc} <br/> <br/>
                            {verse.raman?.et}
                        </div>
                    </div>
                </div>



                {/* Card 12 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >
                            {verse.abhinav.author}
                        </h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>
                    <div className="accordion-collapse" style={{display: open? "block":"none"}} >
                        <div className="accordion-body">
                            {verse.abhinav?.sc} <br/> <br/>
                            {verse.abhinav?.et}
                        </div>
                    </div>
                </div>



                {/* Card 13 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >
                            {verse.sankar.author}
                        </h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>
                    <div className="accordion-collapse" style={{display: open? "block":"none"}} >
                        <div className="accordion-body">
                            {verse.sankar?.ht} <br/> <br/>
                            {verse.sankar?.sc} <br/> <br/>
                            {verse.sankar?.et}
                        </div>
                    </div>
                </div>



                {/* Card 14 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >
                            {verse.jaya.author}
                        </h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>
                    <div className="accordion-collapse" style={{display: open? "block":"none"}} >
                        <div className="accordion-body">
                            {verse.jaya?.sc}
                        </div>
                    </div>
                </div>



                {/* Card 15 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >
                            {verse.vallabh.author}
                        </h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>
                    <div className="accordion-collapse" style={{display: open? "block":"none"}} >
                        <div className="accordion-body">
                            {verse.vallabh?.sc}
                        </div>
                    </div>
                </div>



                {/* Card 16 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >{verse.ms.author}</h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>
                    <div className="accordion-collapse" style={{display: open? "block":"none"}} >
                        <div className="accordion-body">
                            {verse.ms?.sc}
                        </div>
                    </div>
                </div>



                {/* Card 17 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >{verse.srid.author}</h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>

                    <div className="accordion-collapse" style={{display: open? "block":"none"}} >
                        <div className="accordion-body">
                            {verse.srid?.sc}
                        </div>
                    </div>
                </div>



                {/* Card 18 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >{verse.dhan.author}

                        </h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>

                    <div className="accordion-collapse" style={{display: open? "block":"none"}} >
                        <div className="accordion-body">
                            {verse.dhan?.sc}
                        </div>
                    </div>
                </div>



                {/* Card 19 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >{verse.venkat.author}

                        </h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>

                    <div className="accordion-collapse" style={{display: open? "block":"none"}} >
                        <div className="accordion-body">
                            {verse.venkat?.sc}
                        </div>
                    </div>
                </div>


                {/* Card 20 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >
                            {verse.puru.author}
                        </h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>

                    <div className="accordion-collapse" style={{display: open? "block":"none"}} >
                        <div className="accordion-body">
                            {verse.puru?.sc}
                        </div>
                    </div>
                </div>




                {/* Card 21 */}
                <div className="accordion-card">
                    <div className="accordion-header-container" onClick={()=>{ showBody()}} >
                        <h2 >
                            {verse.neel.author}
                        </h2>
                        <button type="button"  className="accordion-button">
                            {open? "—" : "＋" }
                        </button>
                    </div>

                    <div className="accordion-collapse" style={{display: open? "block":"none"}} >
                        <div className="accordion-body">
                            {verse.neel?.sc}
                        </div>
                    </div>
                </div>

            </div>



            {/*<Accordion defaultActiveKey={['0']} alwaysOpen>*/}

            {/*    <Accordion.Item eventKey="0" onClick={showBody}>*/}
            {/*        <Accordion.Header >{verse.tej.author} <span id="openClose">{open? "—" : "＋" }</span></Accordion.Header>*/}
            {/*        <Accordion.Body style={{display:open? "block":"none"}}>*/}
            {/*            {verse.tej?.ht}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}

            {/*    <Accordion.Item eventKey="1">*/}
            {/*        <Accordion.Header>{verse.siva.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.siva?.et} <br/> <br/>*/}
            {/*            {verse.siva?.ec}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}


            {/*    <Accordion.Item eventKey="2">*/}
            {/*        <Accordion.Header>{verse.purohit.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.purohit?.et}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}


            {/*    <Accordion.Item eventKey="3">*/}
            {/*        <Accordion.Header>{verse.chinmay.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.chinmay?.hc}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}


            {/*    <Accordion.Item eventKey="4">*/}
            {/*        <Accordion.Header>{verse.san.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.san?.et}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}


            {/*    <Accordion.Item eventKey="5">*/}
            {/*        <Accordion.Header>{verse.adi.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.adi?.et}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}


            {/*    <Accordion.Item eventKey="6">*/}
            {/*        <Accordion.Header>{verse.gambir.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.gambir?.et}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}


            {/*    <Accordion.Item eventKey="7">*/}
            {/*        <Accordion.Header>{verse.madhav.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.madhav?.sc}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}


            {/*    <Accordion.Item eventKey="8">*/}
            {/*        <Accordion.Header>{verse.anand.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.anand?.sc}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}


            {/*    <Accordion.Item eventKey="9">*/}
            {/*        <Accordion.Header>{verse.rams.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.rams?.ht} <br/> <br/>*/}
            {/*            {verse.rams?.hc}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}


            {/*    <Accordion.Item eventKey="10">*/}
            {/*        <Accordion.Header>{verse.raman.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.raman?.sc} <br/> <br/>*/}
            {/*            {verse.raman?.et}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}


            {/*    <Accordion.Item eventKey="11">*/}
            {/*        <Accordion.Header>{verse.abhinav.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.abhinav?.sc} <br/> <br/>*/}
            {/*            {verse.abhinav?.et}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}


            {/*    <Accordion.Item eventKey="12">*/}
            {/*        <Accordion.Header>{verse.sankar.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.sankar?.ht} <br/> <br/>*/}
            {/*            {verse.sankar?.sc} <br/> <br/>*/}
            {/*            {verse.sankar?.et}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}


            {/*    <Accordion.Item eventKey="13">*/}
            {/*        <Accordion.Header>{verse.jaya.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.jaya?.sc}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}


            {/*    <Accordion.Item eventKey="14">*/}
            {/*        <Accordion.Header>{verse.vallabh.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.vallabh?.sc}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}


            {/*    <Accordion.Item eventKey="15">*/}
            {/*        <Accordion.Header>{verse.ms.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.ms?.sc}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}


            {/*    <Accordion.Item eventKey="16">*/}
            {/*        <Accordion.Header>{verse.srid.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.srid?.sc}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}


            {/*    <Accordion.Item eventKey="17">*/}
            {/*        <Accordion.Header>{verse.dhan.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.dhan?.sc}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}


            {/*    <Accordion.Item eventKey="18">*/}
            {/*        <Accordion.Header>{verse.venkat.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.venkat?.sc}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}


            {/*    <Accordion.Item eventKey="19">*/}
            {/*        <Accordion.Header>{verse.puru.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.puru?.sc}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}


            {/*    <Accordion.Item eventKey="20">*/}
            {/*        <Accordion.Header>{verse.neel.author}</Accordion.Header>*/}
            {/*        <Accordion.Body>*/}
            {/*            {verse.neel?.sc}*/}
            {/*        </Accordion.Body>*/}
            {/*    </Accordion.Item>*/}
            {/*</Accordion>*/}
        </>
    );
};

export default Gitashlok;