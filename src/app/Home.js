import React, { Component } from 'react';
import { ReactiveBase, MultiList, DataSearch, SelectedFilters, ReactiveList } from '@appbaseio/reactivesearch';


class ReactiveSearch extends React.Component {
    render() {
        return(
            <div className="App">

                <ReactiveBase
                    app = "products"
                      credentials = ""
                      url = "https://search-paradigmpcs-k5m2lx3l6kgxbxmzsrgnb3wwqm.ap-southeast-2.es.amazonaws.com"
                      analytics>
                    
                    <MultiList
                        componentId = "list-1"
                        dataField = "InStock"
                        showSearch = {false}
                        size = {2}
                        style = {{
                            marginBottom: 20
                        }}
                        title = "In Stock?"
                    />

                    <DataSearch
                        componentId="result"
                        dataField = {[
                            "Description",
                            "Description.autosuggest",
                            "Description.english",
                            "Description.search",
                            "ProdID",
                            "ProdID.autosuggest",
                            "ProdID.english",
                            "ProdID.search",
                            "CategoryName",
                            "CategoryName.autosuggest",
                            "CategoryName.english",
                            "CategoryName.search",
                            "MfID",
                            "MfID"
                        ]}
                        fieldWeights = { [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] }
                        fuzziness = {0}
                        highlightField = {["Description", "ProdID", "CategoryName", "MfID"]}
                        size = {20}
                        style = {{
                            marginBottom: 20
                        }}
                        title = "Description"
                    />

                    <SelectedFilters />

                    <ReactiveList
                        componentId="result"
                        dataField="_score"
                        from={ 0 }
                        size={ 20 }
                        pagination={true}
                        react={{
                            and: ["search", "list-1"]
                        }}
                        onData={(res) => { console.log(res)

                            return( 
                                <div>
                                    <h2>{ res.categoryname }</h2> <br />
                                    Manufacurer ID: { res.mfid } <br />
                                    Manufacurer Part#: { res.MfPN } <br />
                                    Prod ID: { res.prodid } <br />
                                    Warranty: { res.warranty } <br />
                                    In Stock: { res.instock } <br />
                                    Price: ${ res.sell_price } <br />
                                    { res.description }
                                </div>  
                            )
                        }}
                    />

                </ReactiveBase>


            </div>
        );
    }
}

export default ReactiveSearch;