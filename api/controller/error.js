exports.handling = (err, res) => {
  if (err.data === "not_found") {
    res.status(404).send({
      message: `request not OK`,
    });
  } else {
    res.status(500).send({
      message: "upsss something wrong",
    });
  }
};
